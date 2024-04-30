# Intro

This repo is linked to this [StackOverflow question](https://stackoverflow.com/questions/78407609/tsconfig-for-a-angular-nestjs-monorepo) 

The problematic is to find the correct `tsconfig` to be able to import a variable from
`@app/shared` in `@app/backend` like this

```
import { Controller, Get } from '@nestjs/common';
import { answer } from '@app/shared'

@Controller()
export class AppController {

  @Get()
  getHello(): string {
    return `the answer is ${answer}`;
  }
}


```

# Initialization
`npm init`

# Backend
`cd packages/backend && npm start`

# Frontend
`cd packages/frontend && npm start`