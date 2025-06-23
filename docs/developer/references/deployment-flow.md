# Deployment flow

In this reference document we present the main deployment flows for the Graasp platform.

## Management of the infrastructure through code

We manage the infrastructure with code. This practice is called "infrastructure
as code" or IaC for short. It allows to define the components of the deployed
infrastructure through code making the management easier for users already
familiar with these concepts.

The official instance of Graasp at [graasp.org](https://graasp.org) is hosted
on AWS. AWS is the cloud provider making the computing resources available to
run the Graasp platform.
The IaC is created using Terraform and the AWS CDK for Typescript.
This makes the infrastructure specific to hosting with the services provided
by AWS. In order to be independent of the cloud provider, the infrastructure
should use abstractions that are available on all cloud providers.
In our case the development cost to implement such cloud-agnostic architecture
was not worth it.

:::note
We do provide alternative ways of running Graasp on non-AWS infrastructure.
See [the docker compose file for standalone installation](https://github.com/graasp/graasp/blob/main/docker/compose.yml).
Be warned that it will require so work on your side and that technical knowledge
is required.
:::

## Infrastructure states

The infrastructure can be in 4 different states.

The normal state in `running`. In this state all necessary services are running
and the app is fully available.

The `restricted` state enables a maintenance mode that redirects traffic to
the maintenance page unless it provides some special headers. This mode is
useful when you want to start a maintenance operation and need to drain users
from the services. It is also used to ensure correct operation after some
work has been done. Developers using an extension that adds the special headers
on every request are able to test the platform while normal users still see the
maintenance redirection.

The `db-only` state stops all core services other than the web analytics service
`umami` and the database. It is used to perform migrations. We require the
backend server to be down to ensure migrations are performed without conflicts
from users interacting with the platform. This process does not allow rolling
deployments and requires a service interruption. We think that at our scale these
trade-offs are acceptable as they allow us to reduce the complexity of deploying
a new version of the platform. In the `db-only` state a single use task containing
the migration code is run.

The `stopped` state stops all services and puts the platform in a "deep-sleep".
We use it to spare costs on our development and staging environments when they
are not in use.

## Anatomy of a deployment

A deployment usually follows these steps:

- The infra is in the `running` state
- The infra is in the `restricted` state
- The infra is in the `db-only` state
- The migrations are run
- The infra is in the `restricted` state with the new code
- The infra is in the `running` state
