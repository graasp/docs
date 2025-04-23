---
sidebar_position: 3
---

# DevOps / Deployment

In this section we describe how the Graasp cloud deployment is handled by going through the steps needed to deploy a new version.

## Context

The Graasp infrastructure is deployed on the AWS cloud platform. AWS is used as a hosting provider, making compute and storage available to their customers who are responsible for configuring and using the resources made available.
The Graasp source code is hosted on GitHub. We develop the Graasp platform as an open source project. You can get involved, contact us on GitHub!
The orchestration and automation is carried out by GitHub Actions (CI runners).
The infrastructure in defined with Typescript via terraform using the terraform CDKTF library. We do "Infrastructure as Code" (IaC). IaC allows us to manage our infrastructure the same way we manage our source code. We get version control and can use the same workflows as with code.

## Deployment state

The infrastructure can be in any of the following states:

- running: all services are running, the platform is available under normal conditions
- restricted: services are running, but they are not available to the normal user, they see a maintenance screen
- db-only: no services are running, only the database is available and a migration task is launched when transitioning to this state
- stopped: nothing is running all services are at 0 and the db is temporarily stopped (max 7 days then AWS starts it again)

##  Recipies

### Deploying a new version requiring a migration

If you need to deploy a new version of the backend which requires a database migration, follow these steps:

1. Release the new code version you need via release please. This will push the core and migrate images to the public ECR for use later.
1. Deploy the maintenance, so public trafic to the services is drained: for this go into the iac repo and run the `Apply infrastructure on env`, select the main branch, the right environment (dev, stage or prod) and change the expected state to `restricted` (this will apply the maintenance).
1. Wait for the connection to the services to drain. You can check the analytics in Umami to see in real time how many people are on the platform.
1. Create a snapshot of the database, so you will be able to restore the data in case of a failed migration.
1. Run the `Apply Migration` workflow in IaC. It will shutdown the services and launch a on-off task that will execute the migration. You should give as inputs the correct environment that you want to use (dev, stage, prod) and the version you want to deploy. This should be the version number you released in the first step, i.e: `v1.54.8` or `v3.56.2-rc1`.
1. You can monitor the migration by looking at the logs off the one off task launched by the migration deploy.
1. The CI will wait for the migration to successfully pass.
1. Once the CI returns, observe the load on the database, as some vaccuming might be in progress. Wait for it to settle.
1. When the database is settled, you can deploy a new version of the core by using the `Deploy new core version` workflow from the infrastructure. Choose the right env and select the `restricted` state so the maintenance stays in place.
1. Once you have checked everything works as expected, you can deploy once more in the `running` state.

## Continuous integration (CI)

Github Actions used to build, test and deploy apps

Github Pages used to host storybook (design system)

## Infrastructure

Deploys on AWS

### Infrastructure as code (IaC)

:::caution Coming soon !

Current infrastructure wsa built by hand using a combination of AWS Console UI and AWS CLI.
The transition to a fully managed infrastructure as code is in progress.
This will allow us to migrate to different data-centers and keep track of changes made to the infra.

:::
