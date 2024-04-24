export default {
    appName: 'Dolphin',
    appFullName: 'Dolphin Memory',
    intro: 'An efficient memory application',
    editorAppName: 'Dauphin',
    home: 'Home',
    docs: 'Docs',
    downloads: 'Downloads',
    download: 'Download',
    features: 'Features',
    cardEditing: 'Card Editing',
    cardEditingDesc: 'Make memory cards in batches to save your time',
    sync: 'Sync',
    syncDesc: 'Transfer cards to dolphin memory app on your phone',
    memorization: 'Memorization',
    memorizationDesc:
        'Custom template, custom memorization mode and custom strategy, help you to memorize in an efficient manner',
    memorizationDesc2:
        'Appropriate form makes memorization easier. Dolphin is base on web page, so it is able to display data in any form',
    test: 'Test',
    testDesc: ' Test is a helpful way to measure your memorization effort',
    statistics: 'Statistics',
    statisticsDesc:
        'Learn about progress of your memorization, daily activity...',
    diagnosis: 'Diagnosis',
    diagnosisDesc: 'Diagnosis helps you to find your potential problems',
    mode: 'Mode',
    flip: 'Flip',
    batch: 'Batch',
    free: 'Free',
    custom: 'Custom',
    flipMode: 'Flip Mode',
    flipDesc:
        'Flip mode is like flashcard, the front side contains a word or a short phrase, the back side is the definition. This mode is suitable for language learning, early childhood enlightenment',
    batchMode: 'Batch Mode',
    batchDesc:
        'Batch mode is also for words/phrases, different from flip mode, the mode shows words/phrases in batches. While you already know the most of words/phrases, flip mode maybe too slow for you, batch mode is a better choice',
    freeMode: 'Custom Mode',
    freeDesc:
        'Free mode is flexible and powerful, it could provide any form of memory card whatever you want, blank filling, selection, formula, map',
    template: 'Template',
    templateDesc:
        'Template is like clothes, different templates make the same data different looks. For example, you can memorize words by filling in the blanks or by choosing answers',
    templateStore: 'Template Store',
    memoryStrategy: 'Memory Strategy',
    strategyDesc:
        'We define <b>familiar</b> as the unit of memory, it is based on latest memory, it ranges from 0 to 100%. We split the whole book (card collection) into serveral groups by familiar, set their <b>familiar target</b> and arrange their order of appearance while memorizing. Of course, you can also customize it yourself',
    strategyDesc2:
        'Memory effort mainly depends on memory mertials and your attention, it is hard to say when you need to review, so dolphin focus on certain things and is committed to being your right-hand man rather than a daily-task-burden',
    bookstore: 'Bookstore',
    bookstoreDesc:
        'We provide a lot of books for you, if you cannot find the book you want in the bookstore, you can make your own',
    editorDesc:
        'Making memory card is a heavy task, so we provide an editor to help you to make it easier.',
    makeInBatches: 'Make cards in batches',
    makeInBatchesDesc:
        'Template is a web page, such as the profile page of twitter, all users share the same profile page, the difference is only user data. Make cards in batches using templates, save you a lot time',
    multiTpl: 'Multi-Template',
    multiTplDesc:
        'Using various forms to memorize one thing is an effective way',
    livePreview: 'Live Preview',
    livePreviewDesc: 'Live preview on different devices while editing',
    editorSyncDesc:
        'Transfering cards to your memory app once editing is done. Editor also supports backup/restore the data on your memory app',
    share: 'Share',
    shareDesc:
        'What if you want to share a book(card collection)? The editor provides a function called "Pack", it packs a book into a smaller file which is suitable for sharing, other persons import the file into dolphin memory app directly',
    privacy: 'Privacy',
    privacyDesc:
        'Edit locally, sync through local network, offline memorization, our apps provide the safest way to protect your data',
    contactUs: 'Contact Us',
    contactUsDesc:
        'If you have any problem or any advice, welcome to contact us',
    dlAddr: 'Address {{index}}',
    basic: 'Basic',
    demo: 'Demo',
    developer: 'Developer',
    tplDownload: 'Templates',
    tplOptionField:
        'Fields ending with ? are optional, it means you can omit the field if your do not need it',
    tplWordNormal: 'Normal for Word',
    tplWordSpelling: 'Spelling for Word',
    tplFilling: 'Filling',
    tplFillingTip: 'use "[[" and "]]" to wrap the content need to fill',
    tplSelection: 'Selection',
    data: 'Data',
    resource: 'Resource',
    preview: 'Preview',
    coreConcepts: 'Core Concepts',
    docBasicP1:
        'Data is the things you want to memorize, we store them in JSON file. What is JSON? For instance, an english word consists of spelling, pronounce, definition, a word can be represented by JSON format like this',
    docBasicP2:
        'Content wrapped by curly brackets is an Object, it consists of Key-Value pairs, "name", "pronounce" and "definitions" are keys(or properties), their values could be String(e.g. "look", "lʊk", "to appear or seem"), Number(e.g. 1, 1.2), Boolean(true or false), Object or Array(collection of the same type, wrapped by square brackets). Let\'s take a look at another example, how to record Tom\'s personal information ',
    docBasciP3:
        'Generally our memory materials are a series of same type of things, we can record them as an Array consists of Object.',
    docBasicP4:
        'ATTENTION: "name" is required for every single item, and it is unique',
    docBasicP5:
        'Although JSON looks concise, but it is a bit complicated to edit. Excel is familiar to most people, if your data does not contains Array/Object in single item, you can edit in Excel, and then convert it to JSON. There are many Excel-To-JSON tools on the internet.',
    docBasicP6:
        'JSON is a concise way to store data, but it is just plain text, is not good enough to read, we want colors, fonts, interactions, this is what templates do.',
    docBasicP7:
        'Now, temlate makes data more readable than JSON. Sometimes we wonder if we can spell it, sure, template can do it as well.',
    docBasicP8:
        'For same data, we can use different templates to help us memorize efficiently. If you would not like to write code, we have provided a few templates to use directly.',
    docBasicP9: '"Can I listen to word pronunciation?", absolutely you can.',
    docBasicP10:
        'Any type of file can be resource, image, audio, video, word, excel, json...Like data, resource can be handled in batches, find more details in demo',
    docDemoTitle: 'Demo: English Words',
    docDemoP1:
        'This simple demo shows you how to use our apps. Dauphin is extremely powerful, but currently, it is not very friendly to many people, the editing progcess mainly depends on programming, we will improve it gradually. if you have any advice, welcome to contact us. Before start this demo, please make sure you have Dauphin and Dolphin installed. And then go to template store to get two template files, "Normal for Word" and "Spelling for Word"',
    demo1: 'Open the editor and click "Edit" tab',
    demo2: 'Click the "New" button, create a book',
    demo3: 'Choose "Data" tab, and then click the "New" button, fill name and content fields, and then click the "Add" button',
    demo4: 'Choose "Template" tab, and then click "Import" button, pick those templates download from template store. Keep "Normal" template selected',
    demo5: 'Click the QRCode icon, scan it with memory app(Profile>Preview), you will see the card',
    demo6: 'Choose the "Spelling" template, you can spell the word in app, and check if it is correct',
    demo7: 'Editing is done, let\'s send it to app. Click "Sync" tab and pick the book, and then scan the QRCode with memory app(Profile&gt;Synchronization)',
    demo8: 'Select all content and then click "Send" button, the book will be sent to memory app. If you select a book on memory app, the left content will be sent to the book.',
    demo9: 'We provide three memory mode, Flip and Batch is for word/phrase, Custom is for others. If you choose Flip mode or Batch mode, Normal template is appropriate, Spelling template is suitable for Custom mode.',
    demo10: 'If you want to share your book with your friends, the best method is to pack(in Toolkit) it into a single file, and pass it to your friends, they import the packed book into memory app directly',
    tplEditing: 'Template Editing',
    docDevP0:
        'If you are new to web development, we have a series of videos for you.',
    learningVideos: 'Brief Videos for Web Development',
    docDevP1:
        'Memory card is actually web page running in app, page structure is like this.',
    tips: 'Tips',
    docDevP6:
        'Template is a plain web page, no any other restrictions, you can use any editor or framework. If you do it in your way, a stub module is needed, http://{ip}:{preview port}/static/preview.js, in general it is http://127.0.0.1:5600/static/preview.js. NOTICE: remove it from artifacts',
    dataFormat: 'Data Format',
    overview: 'Overview',
    ovP1: 'We provide two applications, Dolphin and Dauphin, Dolphin is a memorization app, it helps you to memorize in an efficient way; Dauphin is a book editor, you can use it to make your own memory cards.',
    ovP2: 'Dolphin contains the complete memory process: multiple memorization forms, result collection, testing, statistics and diagnosis.',
    ovP3: 'Dauphin is a powerful editor, making cards in batches, multiple template support, live preview while editing, transfering books between Dauphin and Dolphin, packing book into a single file for sharing',
    ovP4: 'Make cards in batches',
    ovP5: 'Multiple template support',
    android: 'Android',
    ios: 'iOS',
    macos: 'MacOS',
    windows: 'Windows',
    developerVerifyTip:
        'You may encounter the problem about developer certification on MacOS, please check this out.',
    coming: 'Coming...',
};
