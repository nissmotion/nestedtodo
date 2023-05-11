import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react'

export default function KevinTest({ todos, user }) {
  return (
    <AuthenticatedLayout
        user={user}>
      <Head title="Welcome" />
      <h1>Welcome</h1>
      <p>Hello {user.name}, welcome to your first React app!</p>
    </AuthenticatedLayout>
  )
}
