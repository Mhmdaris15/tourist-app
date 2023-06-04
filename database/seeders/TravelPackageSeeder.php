<?php

namespace Database\Seeders;

use App\Models\TravelPackage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TravelPackageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TravelPackage::create([
            "package_name" => "Tropical Paradise",
            "slug" => "tropical-paradise",
            "description" =>"Explore the stunning beaches and lush rainforests of a tropical paradise. Enjoy snorkeling, hiking, and relaxing by the crystal-clear waters.",
            "facilities" => "Beachfront accommodation, guided tours, airport transfers, meals included.",
            "price" => 1500,
            "discount" => 0.1,
        ]);
        TravelPackage::create([
            "package_name" => "Cultural Delights",
            "slug" => "cultural-delights",
            "description" =>"Immerse yourself in the rich culture and heritage of historic cities. Visit museums, ancient landmarks, and experience local traditions.",
            "facilities" => "City center hotel, guided tours, transportation, meals included",
            "price" => 1200,
            "discount" => 0.15,
        ]);
        TravelPackage::create([
            "package_name" => "Adventure Expedition",
            "slug" => "adventure-expedition",
            "description" =>"Embark on an adrenaline-filled adventure with thrilling activities like trekking, rafting, and wildlife safaris in breathtaking natural landscapes.",
            "facilities" => "Camping accommodations, experienced guides, equipment rental, meals included.",
            "price" => 1800,
            "discount" => 0.05,
        ]);
        TravelPackage::create([
            "package_name" => "Luxury Escapade",
            "slug" => "luxury-escapade",
            "description" =>"Indulge in a luxurious getaway at a top-rated resort. Enjoy spa treatments, fine dining, and exclusive access to premium amenities.",
            "facilities" => "Luxury resort accommodations, personalized services, gourmet meals, airport transfers.",
            "price" => 2500,
            "discount" => 0.2,
        ]);
        TravelPackage::create([
            "package_name" => "Romantic Retreat",
            "slug" => "romantic-retreat",
            "description" =>"Experience a romantic escape with your loved one. Enjoy candlelit dinners, private beach walks, and breathtaking sunset views.",
            "facilities" => "Romantic suite, couples' activities, champagne upon arrival, spa treatments.",
            "price" => 1900,
            "discount" => 0.12,
        ]);
        TravelPackage::create([
            "package_name" => "Family Fun",
            "slug" => "family-fun",
            "description" =>"Create unforgettable family memories with exciting activities and attractions suitable for all ages. Theme parks, wildlife encounters, and more",
            "facilities" => "Family-friendly accommodation, theme park tickets, transportation, meals included.",
            "price" => 1400,
            "discount" => 0.08,
        ]);
        TravelPackage::create([
            "package_name" => "Mountain Expedition",
            "slug" => "mountain-expedition",
            "description" =>"Conquer majestic peaks and witness breathtaking mountain vistas. Hiking, camping, and exploring hidden trails.",
            "facilities" => "Mountain lodge accommodations, experienced guides, equipment rental, meals included",
            "price" => 2200,
            "discount" => 0.1,
        ]);
        TravelPackage::create([
            "package_name" => "Beach Getaway",
            "slug" => "beach-getaway",
            "description" =>"Relax and unwind on pristine sandy beaches. Soak up the sun, swim in turquoise waters, and enjoy beachside activities.",
            "facilities" => "Beachfront resort, beach equipment rental, water sports, meals included.",
            "price" => 1600,
            "discount" => 0.15,
        ]);
        TravelPackage::create([
            "package_name" => "Food and Wine Tour",
            "slug" => "food-and-wine-tour",
            "description" =>"Embark on a gastronomic journey, savoring local delicacies and fine wines. Visit vineyards, take cooking classes, and indulge in culinary delights.",
            "facilities" => "Boutique hotel, food and wine tastings, culinary workshops, transportation.",
            "price" => 2000,
            "discount" => 0.1,
        ]);
        TravelPackage::create([
            "package_name" => "Historic Landmarks Expedition",
            "slug" => "historic-landmarks-expedition",
            "description" =>"Explore the wonders of ancient civilizations and UNESCO World Heritage Sites. Discover architectural marvels and delve into rich history.",
            "facilities" => "City hotel, guided tours, transportation, meals included.",
            "price" => 1700,
            "discount" => 0.12,
        ]);
    }
}