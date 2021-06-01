import { NextApiRequest, NextApiResponse} from 'next'

async function users(req: NextApiRequest, res: NextApiResponse) {
  console.log(`Cookies: ${req.headers.cookie}`)
  res.json({
    users: {
      name: 'Gabriel Sestrem',
      email: 'contato@linkyouweb.com'
    }
  })
}

export default users;