({
    block: 'b-page',
    title: 'Михаил Трошев — mishanga@yandex-team.ru',
    favicon: '//yandex.ru/favicon.ico',
    head: [
        { elem: 'css', url: 'mishanga.css' },
        { elem : 'js', url: '//yandex.st/jquery/1.6.2/jquery.min.js' },
        { elem: 'js', url: 'mishanga.js' }
    ],
    content: {
        block: 'b-card',
        mods: { lang: 'ru' },
        langs: ['ru', 'en'],
        content: [
            {
                block: 'b-card-layout',
                lang: 'ru',
                info: {
                    name: 'Михаил Трошев',
                    position: 'Разработчик интерфейсов',
                    company: {
                        country: 'Россия',
                        locality: 'Москва',
                        zip: '119021',
                        address: 'ул. Льва Толстого, д. 16',
                        phone: '+7 (495) 739-70-00',
                        'phone-add': '6449',
                    //  fax: '+7 (495) 739-70-70',
                        site: 'www.yandex.ru'
                    },
                    person: {
                        email: 'mishanga@yandex-team.ru',
                        cellular: '+7 (926) 226-74-29',
                    //  skype: 'mishanga',
                        github: 'mishanga'
                    }
                }
            },
            {
                block: 'b-card-layout',
                lang: 'en',
                info: {
                    name: 'Mikhail Troshev',
                    position: 'UI developer',
                    company: {
                        country: 'Russia',
                        locality: 'Moscow',
                        zip: '119021',
                        address: '16, Leo Tolstoy St.',
                        phone: '+7 (495) 739-70-00',
                        'phone-add': '6449',
                        site: 'www.yandex.com'
                    },
                    person: {
                        email: 'mishanga@yandex-team.ru',
                        cellular: '+7 (926) 226-74-29',
                        github: 'mishanga'
                    }
                }
            }
        ]
    }
})