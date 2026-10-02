import React, { useEffect, useState } from 'react'
import getUsers from './api/services/userService'

const App = () => {

  const [users , setUsers] = useState([])
  const [isLoading , setisLoading] = useState(false)
  const [error , setError] = useState(null)

  useEffect(() => {

      const fetchUsers = async() => {

        try{
          const res = await getUsers()
          setUsers(res.data.users)
        }catch(error){
          setError(error)
        }finally{
          setisLoading(false)
        }

      }
fetchUsers()
  },[])

  if(isLoading){
    return(
      <>
      <div>
        <p>Loading...</p>
      </div>
      </>
    )
  }

  if(error){
    <div>
      <p>{error}</p>
    </div>    
  }

  return (
  <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
  <div className="mx-auto max-w-7xl">

    {/* Heading */}
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        Users
      </h1>
      <p className="mt-1 text-sm text-gray-500">
        All registered users
      </p>
    </div>

    {/* Responsive Table */}
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left">

          {/* Table Header */}
          <thead className="bg-gray-50">
            <tr className="border-b border-gray-200">
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                User
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Age
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Gender
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Email
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Phone
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Username
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-100">

            {users.map((data) => {
              return (
                <tr
                  key={data.id}
                  className="transition hover:bg-gray-50"
                >

                  {/* User */}
                  <td className="whitespace-nowrap px-5 py-4">
                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-600">
                        {data.firstName?.charAt(0)}
                        {data.lastName?.charAt(0)}
                      </div>

                      <div>
                        <p className="font-semibold text-gray-900">
                          {data.firstName} {data.lastName}
                        </p>

                        <p className="text-sm text-gray-500">
                          {data.maidenName || "N/A"}
                        </p>
                      </div>

                    </div>
                  </td>

                  {/* Age */}
                  <td className="whitespace-nowrap px-5 py-4 text-sm font-medium text-gray-700">
                    {data.age}
                  </td>

                  {/* Gender */}
                  <td className="whitespace-nowrap px-5 py-4">
                    <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold capitalize text-indigo-600">
                      {data.gender}
                    </span>
                  </td>

                  {/* Email */}
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-600">
                    {data.email}
                  </td>

                  {/* Phone */}
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-600">
                    {data.phone}
                  </td>

                  {/* Username */}
                  <td className="whitespace-nowrap px-5 py-4 text-sm font-medium text-gray-800">
                    @{data.username}
                  </td>

                </tr>
              );
            })}

          </tbody>
        </table>
      </div>

    </div>
  </div>
</div>
  )
}

export default App
