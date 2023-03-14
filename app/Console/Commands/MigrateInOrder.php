<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class MigrateInOrder extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:migrate-in-order';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        //
        $migrations = [
            '2023_03_14_175737_create_news_categories_table',
            '2023_03_14_184248_create_news_table',
            '2023_03_14_191744_create_travel_categories_table',
            '2023_03_14_191756_create_travel_table',
            '2023_03_14_192853_create_hostelries_table'
        ];

        foreach($migrations as $migration){
            $this->call('migrate', [
                '--path' => "database/migrations/{$migration}.php",
            ]);
        }

        $this->info('Migrations ran successfully');
    }
}
