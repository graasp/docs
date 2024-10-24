# Auto Login

:::warning

This feature requires a good understanding of Graasp and might be for the more technically inclined.

:::

In this article we will use the term `itemLogin` to designate the possibility to log a user with a pseudonym.

## Purpose {#purpose}

This feature allows to force the itemLogin account used for a lesson by providing a url that contains all necessary information to the user.

##  Use cases {#use-cases}

Potential use-cases for this feature include:

- Studies (like Prolific) where you can provide a personalized link to each participant and you **need** each participant to use a very specific username (for data analysis purposes for example)

## Setting up your lesson {#setup}

In this section we will go over the process for setting up auto login.

1. Create an item
2. Go to this item sharing page
3. In the sharing page enable "Pseudonymized" access with "Pseudonym"

   ![allow access for pseudonymised users](./2024-10-23-pseudo-access.png)

4. Create the link to share with users
    1. Go to the item page in the player, it should look something like this:

        ```txt
        https://player.graasp.org/:rootId/:itemId
        ```

         where `:rootId` and `:itemId` are unique identifiers.
    2. Append to this URL the `/autoLogin` path:

        ```txt
        https://player.graasp.org/:rootId/:itemId/autoLogin
        ```

    3. Add the username to use as a search query parameter:

        ```txt
        https://player.graasp.org/:rootId/:itemId/autoLogin?username=Bob
        ```

    4. Optionally add other parameters like `fullscreen=true` or `shuffle=true`.

## Usage

If someone uses the url generated in the previous section (`https://player.graasp.org/:rootId/:itemId/autoLogin?username=Bob`), they will see the following page:

![auto-login-page.png](./auto-login-page.png)

Clicking on the "Start" button will log them in as `Bob` and bring them to the lesson.

*Et voilà*
