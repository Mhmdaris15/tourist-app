<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Http;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // $url = 'https://picsum.photos/200';
        // $context = stream_context_create([
        //     'http' => [
        //         'timeout' => 30,
        //     ]
        // ]);
        // $imageData = file_get_contents($url, false, $context);
        // $imageUrl = $http_response_header[0]; // get the URL from the response header
        return [
            //
            'news_title' => $this->faker->name(),
            'news_content' => $this->faker->text(),
            'news_date' => $this->faker->dateTime(),
            'news_category_id' => $this->faker->numberBetween(1, 10),
            'news_image' => $this->faker->imageUrl(),
        ];
    }
}
