<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('licences', function (Blueprint $table) {
            $table->id('lc_id');
            $table->string('lc_code')->nullable();
            $table->tinyInteger('lc_status')->default(1)->comment("0 pasif 1 aktif")->nullable();
            $table->softDeletes();
            $table->timestamp('lc_created_at')->nullable();
            $table->timestamp('lc_updated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('licences');
    }
};
