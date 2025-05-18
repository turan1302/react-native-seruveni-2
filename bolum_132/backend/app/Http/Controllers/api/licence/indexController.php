<?php

namespace App\Http\Controllers\api\licence;

use App\Http\Controllers\api\BaseController;
use App\Http\Controllers\Controller;
use App\Http\Requests\LicenceRequest;
use App\Models\MobileLicenceModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class indexController extends BaseController
{
    public function control(LicenceRequest $request)
    {
        $data = $request->except("_token");

        $control = MobileLicenceModel::where([
            "lc_code" => $data["lc_code"],
            "lc_status" => 1
        ])->first();

        if ($control){
            return parent::success("Lisansınız Aktif",null);
        }else{
            return parent::error("Lisans Bulunamadı veya Pasif",[],404);
        }
    }
}
