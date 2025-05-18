<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MobileLicenceModel extends Model
{
    use SoftDeletes;
    protected $guarded = [];
    protected $table = "licences";
    public const CREATED_AT = "lc_created_at";
    public const UPDATED_AT = "lc_updated_at";
}
