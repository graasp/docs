# Local development

Developing an app locally requires some initial data in the database. Then your app needs to apply the login process

1. Change your `hosts` file so that `apps.localhost` redirects to `localhost`.
2. Run the following SQL query to add the necessary instance for running apps locally:

```sql
DO $$
DECLARE
    # random UUID
    publisher_id UUID := '98e4bcb8-6caf-4af8-988b-600aa3af5a86';
    publisher_name varchar := 'Graasp';
    # random UUID
    app_id UUID := '3211293d-5e8e-4f5a-9576-7df30c2175c3';
    app_name varchar := 'MyApp';
    app_port int := 3012;
    app_origin varchar := 'http://apps.localhost:' || app_port;
    found_publisher boolean := FALSE;
BEGIN
    -- Check if publisher already exists
    SELECT EXISTS (
        SELECT 1 FROM publisher WHERE id = publisher_id
    ) INTO found_publisher;

    IF found_publisher THEN
        -- Update existing publisher with new origin
        UPDATE publisher
        SET origins = origins || ARRAY[app_origin]::text[]
        WHERE id = publisher_id;
    ELSE
        -- Insert data into publisher
        INSERT INTO publisher (id, name, origins)
        VALUES (
          publisher_id,
          publisher_name,
          ARRAY[app_origin]::text[]
        );
    END IF;

    -- Insert data into app
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
