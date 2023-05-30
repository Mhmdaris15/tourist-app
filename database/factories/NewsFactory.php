<?php

namespace Database\Factories;

use App\Models\NewsCategory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

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
        $category_ids = NewsCategory::pluck('id')->toArray();
        $news_title = $this->faker->name();
        // generate content 10 paragraphs
        $news_content = $this->faker->paragraphs(10, true);
        return [
            //
            'news_title' => $news_title,
            'news_slug' => Str::slug($news_title),
            'news_content' => $news_content,
            'news_date' => $this->faker->dateTime(),
            'news_category_id' => $this->faker->randomElement($category_ids),
            'news_image' => $this->faker->imageUrl(),
        ];
    }
}