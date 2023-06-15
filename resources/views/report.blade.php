<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .table-container {
            background-color: rgba(255, 255, 255, 0.15);
            border-radius: 12px;
            backdrop-filter: blur(10px);
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .table-container table {
            width: 100%;
            border-collapse: collapse;
        }

        .table-container th,
        .table-container td {
            padding: 10px;
            text-align: left;
        }

        .table-container th {
            background-color: rgba(255, 255, 255, 0.1);
        }

        .table-container tr:nth-child(even) {
            background-color: rgba(255, 255, 255, 0.05);
        }

        .table-container tr:hover {
            background-color: rgba(255, 255, 255, 0.1);
            transition: background-color 0.3s ease;
        }

    </style>
</head>
<body>
    @vite('resources/css/app.css')
    <h1>Title : {{ $title }}</h1>
    <p>Date: {{ $date }}</p>    
    
    <table class="table-container w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Date Of Reservation
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Number of People
                </th>
                <th scope="col" class="px-6 py-3">
                    Discount
                </th>
                <th scope="col" class="px-6 py-3">
                    Discount Value
                </th>
                <th scope="col" class="px-6 py-3">
                    Total Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Travel Package
                </th>
                <th scope="col" class="px-6 py-3">
                    Customer Name
                </th>
            </tr>
        </thead>
        <tbody>
            
            @foreach($reservations as $reservation)
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ $reservation['id'] }}
                </th>
                <td class="px-6 py-4">
                    {{ $reservation['date_of_reservation'] }}
                </td>
                <td class="px-6 py-4">
                    {{ $reservation['price'] }}
                </td>
                <td class="px-6 py-4">
                    {{ $reservation['number_of_people'] }}
                </td>
                <td class="px-6 py-4">
                    {{ $reservation['discount'] }}
                </td>
                <td class="px-6 py-4">
                    {{ $reservation['discount_value'] }}
                </td>
                <td class="px-6 py-4">
                    {{ $reservation['total_price'] }}
                </td>
                <td class="px-6 py-4">
                    {{ $reservation['status'] }}
                </td>
                {{-- <td class="px-6 py-4">
                    @if ($reservation->travel_package()->count() > 0)
                        {{ $reservation->travel_package()->first()->travel_package_name }}
                    @foreach($reservation->travel_package as $travel_package)
                        {{ $travel_package->travel_package_name }}
                    @endforeach
                    @endif
                </td> --}}
                <td class="px-6 py-4">
                    
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>

</body>
</html>