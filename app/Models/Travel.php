<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Travel extends Model
{
    use HasFactory;

    protected $guarded = [
        'id',
    ];

    public function TravelCategory(): BelongsTo
    {
        return $this->belongsTo(TravelCategory::class);
    }
}
