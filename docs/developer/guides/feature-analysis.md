# ⚙️ Feature Analysis

This document will guide you through the important questions you need to ask yourself when you are starting the analysis phase for the creation of a new feature.

:::info
Before going further in this document it is important that you ensure the feature should be implemented.

Please check the feature relevance with [Should we implement this ?](./should-we-implement-this).

Refer to that document in case you end up with a "Reconsider" or "Maybe not". This is also a good time to involve other team members and to have a discussion on what you expect from this feature, and what value it will provide to the users.
:::

## Goals

This document is intended as a reflection guide, when you are writing concrete specifications of your feature. It may not be complete, but should help you to ask the right questions and to plan beforehand. No coding is required to complete this document. However it should encourage you to think about the semantics of your feature and kickstart a discussion with other team members that should lead to a good design that is approved by all and is in line with the current practices of the team and the project.

If you complete this guide, it should reduce the possibility of surprises, redesigns during the Pull review step and overall create a more enjoyable experience for everyone. The added benefit is also that you will already have a complete documentation of you feature ready to include alongside your code for future reference.

## Design Questions

### API design reflection

What should the route be named ? Does it align with the other routes next to it ? Are parameters in the query string, data in the body, what is the HTTP verb that is used ? Does it require authentication ? Does it require additional rights ?

What is the shape of the data that is returned.

What happens in case of failure ? What are the error codes, what are the error messages ?

### Frontend design

Is this a hook or a mutation ?
What are the parameters of the hook/mutation ?
Where will it be used ?

### Backend design

Where should this go ? is this a new service ? Does it extend an already existing service ?
Do we need to create a new entity ? What will the table shape be ?
Are there any shared types that will need to be created ?

## Important considerations

Don't optimize too soon.
Don't over-engineer it.
