import { Request, Response } from 'express'

import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'rodrigo@facholi.io',
    password: '1234',
    techs: ['Node.js', 'ReactJS', 'React Native', { title: 'Javascript', xp: 9 }]
  })
  return response.json({ msg: 'Hello world' })
}