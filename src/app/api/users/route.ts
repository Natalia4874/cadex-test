import { NextResponse } from 'next/server'

type User = {
  id: number
  name: string
  email: string
  message: string
}

const users: User[] = [
  { id: 1, name: 'John', email: 'john@example.com', message: 'Hello' },
  { id: 2, name: 'Jane', email: 'jane@example.com', message: 'Hi there' }
]

export async function GET() {
  return NextResponse.json(users)
}

export async function POST(request: Request) {
  try {
    const newUser = await request.json()

    if (!newUser.name || !newUser.email || !newUser.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const userWithId = {
      ...newUser,
      id: users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1
    }

    users.push(userWithId)

    return NextResponse.json(userWithId, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
