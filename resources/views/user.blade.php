<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    @vite('resources/css/app.css')
    <h1>Title : {{ $title }}</h1>
    <p>Date: {{ $date }}</p>    
    
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Role
                </th>
                <th scope="col" class="px-6 py-3">
                    Password
                </th>
            </tr>
        </thead>
        <tbody>
            
            @foreach($users as $user)
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ $user['id'] }}
                </th>
                <td class="px-6 py-4">
                    {{ $user['name'] }}
                </td>
                <td class="px-6 py-4">
                    {{ $user['email'] }}
                </td>
                <td class="px-6 py-4">
                    {{ $user['role'] }}
                </td>
                <td class="px-6 py-4">
                    {{ $user['password'] }}
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>

</body>
</html>