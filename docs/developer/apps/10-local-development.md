# Local development

Developing an app locally requires some initial data in the database. Then your app needs to apply the login process

1. Change your `hosts` file so that `apps.localhost` redirects to `localhost`.
2. Run the following SQL query to add the necessary instance for running apps locally:

  ```sql
  DO $$
  DECLARE
      # random UUID
      publisher_id UUID := '98e4bcb8-6caf-4af8-988b-600aa3af5a86';
      # random UUID
      app_id UUID := '3211293d-5e8e-4f5a-9576-7df30c2175c3';
      app_name varchar := 'My App';
      app_port int := 3012;
      app_origin varchar := 'http://apps.localhost:' || app_port;
  BEGIN
      -- Insert data into the publisher table
      INSERT INTO publisher (id, name, origins)
      VALUES (
        publisher_id,
        app_name,
        ARRAY[app_origin]::text[]
      );

      -- Insert data into the app table
      INSERT INTO app (id, key, name, description, url, publisher_id)
      VALUES (
        app_id,
        app_id,
        app_name,
        app_name,
        app_origin,
        publisher_id
      );
  END $$;
  ```

3. Then you will need to add an app item with url `http://apps.localhost:3012`.
4. Run your app on `http://apps.localhost:3012`.
