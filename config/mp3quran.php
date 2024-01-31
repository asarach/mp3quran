<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Upload Settings
    |--------------------------------------------------------------------------
    */
    'upload_folders' => [
        'mpa' => [
            'xl' => [
                'folder' => 'mpa/xl/',
                'size' => [1280, false]
            ],
            'lg' => [
                'folder' => 'mpa/lg/',
                'size' => [720, false]
            ],
            'md' => [
                'folder' => 'mpa/md/',
                'size' => [540, false]
            ],
            'sm' => [
                'folder' => 'mpa/sm/',
                'size' => [360, false]
            ],
            'xs' => [
                'folder' => 'mpa/xs/',
                'size' => [180, false]
            ]
        ],
        'tvs' => [
            'lg' => [
                'folder' => 'tvs/lg/',
                'size' => [820, 615]
            ],
            'md' => [
                'folder' => 'tvs/md/',
                'size' => [400, 300]
            ],
            'sm' => [
                'folder' => 'tvs/sm/',
                'size' => [240, 180]
            ],
            'xs' => [
                'folder' => 'tvs/xs/',
                'size' => [120, 90]
            ]
        ],
        'wysiwyg' => [
            'lg' => [
                'folder' => 'wysiwyg/lg/',
                'size' => [820, 615]
            ],
            'md' => [
                'folder' => 'wysiwyg/md/',
                'size' => [400, 300]
            ],
            'sm' => [
                'folder' => 'wysiwyg/sm/',
                'size' => [240, 180]
            ],
            'xs' => [
                'folder' => 'wysiwyg/xs/',
                'size' => [120, 90]
            ]
        ],

        'videos' => [
            'lg' => [
                'folder' => 'videos/lg/',
                'size' => [820, 615]
            ],
            'md' => [
                'folder' => 'videos/md/',
                'size' => [400, 300]
            ],
            'sm' => [
                'folder' => 'videos/sm/',
                'size' => [240, 180]
            ],
            'xs' => [
                'folder' => 'videos/xs/',
                'size' => [120, 90]
            ]
        ],

        'video-logo' => [
            'lg' => [
                'folder' => 'video-logo/lg/',
                'size' => [120, 120]
            ],
        ],
        'avatars' => [
            'lg' => [
                'folder' => 'avatars/lg/',
                'size' => [256, 256]
            ],
            'md' => [
                'folder' => 'avatars/md/',
                'size' => [128, 128]
            ],
            'sm' => [
                'folder' => 'avatars/sm/',
                'size' => [64, 64]
            ],
            'xs' => [
                'folder' => 'avatars/xs/',
                'size' => [32, 32]
            ]
        ],
        'apps' => [
            'lg' => [
                'folder' => 'apps/lg/',
                'size' => [360, 360]
            ],
            'md' => [
                'folder' => 'apps/md/',
                'size' => [128, 128]
            ],
            'sm' => [
                'folder' => 'apps/sm/',
                'size' => [64, 64]
            ],
            'xs' => [
                'folder' => 'apps/xs/',
                'size' => [32, 32]
            ]
        ],
        'radios' => [
            'lg' => [
                'folder' => 'radios/lg/',
                'size' => [256, 256]
            ],
            'md' => [
                'folder' => 'radios/md/',
                'size' => [128, 128]
            ],
            'sm' => [
                'folder' => 'radios/sm/',
                'size' => [64, 64]
            ],
            'xs' => [
                'folder' => 'radios/xs/',
                'size' => [32, 32]
            ]
        ],
    ],

    'page_views' => [
        'simple' => 'Simple',
        'about'  => 'About'
    ],
    
    'menu_locations' => [
        'main' => 'Main',
        'footer-links'  => 'Footer Links',
        'partners-links'  => 'Partners Links'
    ],

    'user_roles' => [
        'user' => 'User',
        'admin'  => 'Admin',
        'super-admin'  => 'SuperAdmin',
    ],

    'countries' => [
        'sau' => 'saudi-arabia',
        'egy' => 'egypt',
    ],
    'ads_places' => [
        '1' => 'header',
        '2' => 'popup',
    ],

    'version' => '1.1.01',
    'version_lang' => '1.1',

];
