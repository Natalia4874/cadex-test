import { NextResponse } from 'next/server'

const data = [
  {
    id: 1,
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum'
  },
  {
    id: 2,
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum'
  },
  {
    id: 3,
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum'
  },
  {
    id: 4,
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum'
  },
  {
    id: 5,
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum'
  },
  {
    id: 6,
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum'
  }
]

// GET /api/data
export async function GET() {
  return NextResponse.json(data)
}

// POST /api/data
export async function POST(request: Request) {
  const newData = await request.json()
  data.push(newData)
  return NextResponse.json(newData, { status: 201 })
}
