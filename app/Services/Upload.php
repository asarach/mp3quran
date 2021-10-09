<?php

namespace Mp3quran\Services;

use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Support\Facades\File;

class Upload
{

    /**
     * Upload image
     *
     * @return boolean
     */
    public function image($input, $type)
    {
        switch ($type) {
            case 'radios':
                $now = Carbon::now();
                $date = $now->year . '/' . $now->month . '/';
                break;
            case 'video-logo':
                $now = Carbon::now();
                $date = $now->year . '/' . $now->month . '/';
                break;
            case 'reads':
                $now = Carbon::now();
                $date = $now->year . '/' . $now->month . '/';
                break;
            case 'reciters':
                $now = Carbon::now();
                $date = $now->year . '/' . $now->month . '/';
                break;
            case 'photos':
                $now = Carbon::now();
                $date = $now->year . '/' . $now->month . '/';
                break;
            case 'rewayat':
                $now = Carbon::now();
                $date = $now->year . '/' . $now->month . '/';
                break;
            case 'questions':
                $now = Carbon::now();
                $date = $now->year . '/' . $now->month . '/';
                break;
            case 'wysiwyg':
                $now = Carbon::now();
                $date = $now->year . '/' . $now->month . '/';
                break;
            case 'slides':
                $now = Carbon::now();
                $date = $now->year . '/' . $now->month . '/';
                break;
            default:
                $date = '';
                break;
        }


        $sizes = config('mp3quran.upload_folders')[$type];

        $this->createFoldersIfNotExists($sizes, $date);
        $name = $this->preparedName('/uploads/' . reset($sizes)['folder'], $date, $input);
        if ($input['file']->getClientOriginalExtension() == 'gif') {
            $this->saveGif($input['file'], $name,  $sizes);
        } else {
            foreach ($sizes as $size) {
                if ($type == 'video-logo') {
                    $this->saveLogo($input['file'], $name, $size['size'], 'uploads/' . $size['folder']);
                } else {
                    $this->saveImage($input['file'], $name, $size['size'], 'uploads/' . $size['folder']);
                }
            }
        }

        return $name;
    }
    public function importPostImage($url, $folder)
    {
        switch ($folder) {
            case 'radios':
                $now = Carbon::now();
                $date = $now->year . '/' . $now->month . '/';
                break;
            case 'reads':
                $now = Carbon::now();
                $date = $now->year . '/' . $now->month . '/';
                break;
            case 'reciters':
                $now = Carbon::now();
                $date = $now->year . '/' . $now->month . '/';
                break;
            case 'photos':
                $now = Carbon::now();
                $date = $now->year . '/' . $now->month . '/';
                break;
            case 'rewayat':
                $now = Carbon::now();
                $date = $now->year . '/' . $now->month . '/';
                break;
            case 'questions':
                $now = Carbon::now();
                $date = $now->year . '/' . $now->month . '/';
                break;
            case 'wysiwyg':
                $now = Carbon::now();
                $date = $now->year . '/' . $now->month . '/';
                break;
            case 'slides':
                $now = Carbon::now();
                $date = $now->year . '/' . $now->month . '/';
                break;
            default:
                $date = '';
                break;
        }


        $sizes = config('mp3quran.upload_folders')[$folder];
        $this->createFoldersIfNotExists($sizes, $date);

        $input = ['filename' => $url];

        $name = $this->preparedName(public_path() . '/uploads/' . reset($sizes)['folder'], $date, $input);
        foreach ($sizes as $size) {
            $this->saveImage($input['filename'], $name, $size['size'], public_path() . '/uploads/' . $size['folder']);
        }

        return $name;
    }
    public function importUrlImage($url, $folder)
    {
        $now = Carbon::now();
        $date = $now->year . '/' . $now->month . '/';


        $sizes = config('mp3quran.upload_folders')[$folder];
        $this->createFoldersIfNotExists($sizes, $date);

        $input = ['filename' => $url];

        $name = $this->preparedName(public_path() . '/uploads/' . reset($sizes)['folder'], $date, $input);
        foreach ($sizes as $size) {
            $contents = file_get_contents($url);
            Storage::put($name, $contents);
        }

        return $name;
    }
    public function rewaya($input, $type)
    {
        $this->createFoldersIfNotExists([['folder' => '/rewayat/']]);
        $name = $this->preparedName('/uploads/rewayat/', '', $input);
        $input['file']->storeAs('/uploads/rewayat/', $name, ['disk' => 'public_html']);
        return $name;
    }

    public function avatar($input)
    {
        $now = Carbon::now();
        $date = $now->year . '/' . $now->month . '/';

        $sizes = config('drtopic.avatars_image_sizes');
        $this->createFoldersIfNotExists($sizes, $date);
        $name = $this->preparedName(reset($sizes)['folder'], $date, $input);
        foreach ($sizes as $size) {
            $this->saveAvatar($input['file'], $name, $size['size'], 'uploads/' . $size['folder']);
        }

        return $name;
    }

    public function file($input, $type)
    {
        $now = Carbon::now();
        $date = $now->year . '/';
        $folder = '/files/' . $date;
        $this->createFoldersIfNotExists([['folder' => $folder]]);

        $name = $this->preparedName('/uploads/files/', $date, $input);

        try {
            $input['file']->move('uploads' . $folder, $name);
        } catch (Exception $e) {
            $this->errors = 'There was a problem uploading your file.';
            return false;
        }

        return  $name;
    }

    public function analyticsFile($input)
    {
        $now = Carbon::now();
        $date = $now->year . '/' . $now->month . '/';
        $folder =  storage_path() . '/analytics_files/' . $date;
        $this->createFoldersIfNotExists([['folder' => $folder]]);
        $name = $this->preparedName($folder, $date, $input);

        try {
            $input['file']->move($folder, $name);
        } catch (Exception $e) {
            $this->errors = 'There was a problem uploading your file.';
            return false;
        }

        return  $name;
    }

    public function preparedName($folder, $date, $input)
    {
        if (isset($input['filename'])) {
            $extension = '.' . pathinfo($input['filename'], PATHINFO_EXTENSION);
            $file_name_slug = str_slug(pathinfo($input['filename'], PATHINFO_FILENAME));
        } else {
            $file_name = $input['file']->getClientOriginalName();
            $file_name_slug = str_slug(pathinfo($file_name, PATHINFO_FILENAME));
            $extension = '.' . $input['file']->getClientOriginalExtension();
        }
        $original_name = $file_name_slug;
        $i = 1;
        while (file_exists(public_path() . $folder . $date . $file_name_slug . $extension)) {
            $file_name_slug = (string) $original_name . '-' . $i;
            $i++;
        }

        $name = $date . $file_name_slug . $extension;

        return $name;
    }

    public function createFoldersIfNotExists($sizes, $date = '')
    {
        foreach ($sizes as $size) {
            if (!File::exists(public_path() . '/uploads/' . $size['folder'] . $date)) {
                File::makeDirectory(public_path() . '/uploads/' . $size['folder'] . $date, 755, true);
            }
        }
    }

    public function saveImage($inputImage, $name, $size, $folder)
    {
        $image = Image::make($inputImage);
        if ($size[1]) {
            if ($size[0] > 300) {
                if ($image->height() > $size[1]) {
                    $image->heighten($size[1]);
                }
                if ($image->width() > $size[0]) {
                    $image->fit($size[0], $size[1]);
                }
            } else {
                $image->fit($size[0], $size[1]);
            }
        } else {
            if ($image->width() > $size[0]) {
                $image->resize($size[0], null, function ($constraint) {
                    $constraint->aspectRatio();
                });
            }
        }

        try {
            $image->save($folder . $name, 100);
        } catch (Exception $e) {
            $this->errors = 'There was a problem uploading your image.';
            return false;
        }
    }
    public function saveGif($file, $name, $sizes)
    {
        $tmp_file = public_path() . '/uploads/' . str_replace('/xl/', '/tmp/', reset($sizes)['folder']);
        $file->move($tmp_file, $name);

        foreach ($sizes as $size) {
            $dest_file = public_path() .  '/uploads/' . $size['folder'];
            try {
                File::copy($tmp_file . '/' . $name, $dest_file . '/' . $name);
            } catch (Exception $e) {
                $this->errors = 'There was a problem uploading your image.';
                return false;
            }
        }
    }
    public function saveLogo($inputImage, $name, $size, $folder)
    {
        $image = Image::make($inputImage);
        $image->resize($size[0], $size[1], function ($constraint) {
            $constraint->aspectRatio();
        });


        try {
            $image->save($folder . $name, 100);
        } catch (Exception $e) {
            $this->errors = 'There was a problem uploading your image.';
            return false;
        }
    }
    public function saveAvatar($inputImage, $name, $size, $folder)
    {
        $image = Image::make($inputImage);
        $image->fit($size[0], $size[1]);
        try {
            $image->save($folder . $name, 100);
        } catch (Exception $e) {
            $this->errors = 'There was a problem uploading your image.';
            return false;
        }
    }

    public function errors()
    {
        return $this->errors;
    }
}
