<?php

namespace App\Repositories\Language;

interface LanguageRepository {

    public function create(array $data);

    public function update($id, array $data);

    public function destroy($id);
}
