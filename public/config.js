window.appSettings = {
  languages: [
    { id: "fa", title: "فارسی", flag: "IR" },
    { id: "en", title: "English", flag: "USA" },
  ],
  allowLanguageSelection: true,
  defaultLanguage: "fa",
  apiBaseUrl: "https://api.stts.ir/panel/api/v1/", //"https://shop.stts.ir/panel/api/v1/", // "https://api.stts.ir/panel/api/v1/",
  ssoUrl: "https://ids.stts.ir/", // "http://185.105.184.57:5001/",
};

window.appSettings.resources = {
  en: {
    translation: {
      APPLICATIONS: "Applications",
    },
  },
  fa: {
    translation: {
      ADMIN_PORTAL: "پرتال راهبری",
      CREATE_ADMIN: "ایجاد راهبر",
      HOME: "خانه",
      DASHBOARD: "داشبورد",
      ADD_DEPOSIT: "ثبت واریزی",
      DEPOSITS_REPORT: "گزارش واریزی‌ها",
      VOUCHERS: "حواله ها",
      BALANCE_REPORT: "گردش حساب",
      API_CONFIGURATION: "تنظیمات API",
      API_DOCUMENTS: "مستندات API",
      NEW_DEPOSIT: "واریزی جدید",
      DEPOSIT_SENTENCE: "در صورت نیاز به ایجاد حواله، واریزی خود را ثبت کنید.",
      ADMIN: "راهبران",
      VOUCHER: "حواله",
      FIN_MANAGEMENT: "مدیریت مالی",
      TOTAL_VOUCHER_ISSUED: "کل حواله‌های صادر شده",
      TOTAL_VOUCHER_CONSUMED: "کل حواله‌های مصرف شده",
      TOTAL_NUMBER_VOTCHER: "تعداد کل حواله",
      VOUCHER_ISSUED: "حواله صادر شده",
      CONFIRM_VOUCHERS: "تایید حواله",
      VOUCHER_CONSUMED: "حواله مصرف شده",
      VOUCHER_LAST_WEEK: "حواله ها در هفته اخیر ",
      VOUCHER_ISSUED_LAST_WEEK: "حواله صادر شده هفته اخیر",
      VOUCHER_ISSUED_LAST_WEEK_TOMAN: "حواله صادر شده هفته اخیر (تومان)",
      VOUCHER_ISSUED_LAST_WEEK_AMOUNT: "مبلغ حواله صادر شده هفته اخیر",
      VOUCHER_CONSUMED_LAST_WEEK: "حواله مصرف شده هفته اخیر",
      VOUCHER_CONSUMED_LAST_WEEK_TOMAN: "حواله مصرف شده هفته اخیر (تومان)",
      VOUCHER_CONSUMED_LAST_WEEK_AMOUNT: "مبلغ حواله مصرف شده هفته اخیر",
      VOUCHER_LAST_WEEK: "حواله ها در هفته اخیر",
      INVENTORY_LAST_WEEK: "موجودی شما هفته‌ی اخیر",
      ALL_TOTAL: "موجودی کل شما",
      ADMIN_MANAGEMENT: "مدیریت راهبر",
      ADMIN_INFO: "اطلاعات راهبر",
      MANAGE_ACCESSES: "مدیرت دسترسی راهبر",
      TOMAN: "تومان",
      MONEY_VOUCHER: "مانی وچر",
      NEW_VOUCHER: "حواله جدید",
      VOUCHER_MANAGEMENT: "مدیریت حواله",
      NEW_CLIENT: "مشتری جدید",
      NEW_ADMIN: "راهبر جدید",
      NAME_LAST_NAME: "نام و نام خانوادگی",
      CLIENT_ID: "شناسه مشتری",
      MOBILE: "موبایل",
      STATUS: "وضعیت",
      SEARCH: "جستجو",
      ROW_NUMBER: "ردیف",
      BALANCE: "موجودی",
      LAST_LOGIN: "آخرین ورود",
      DETAILS: "جزيیات",
      CLIENTS: "مشتریان",
      PAGE_TO: "تا",
      ITEMS_PER_PAGE: "تعداد در هر صفحه",
      NO_ITEMS_FOUND: "موردی یافت نشد",
      EMAIL: "ایمیل",
      CLIENT_MANAGEMENT: "مدیریت مشتری",
      CLIENT_INFO: "اطلاعات مشتری",
      FIN_INFO: "اطلاعات مالی",
      SECURITY_SETTINGS: "تنظیمات امنیتی",
      ACCESSES: "دسترسی ها",
      USER_INFO: "اطلاعات کاربر",
      CHAANGE_PASSWORD: "تغییر رمز عبور",
      PASSWORD: "رمز عبور",
      PASSWORD_INFO_TEXT:
        "رمز عبور باید حداقل 8 حرف و ترکیبی از حروف انگلیسی و اعداد باشد",
      PASSWORD_CONFIRM: "تکرار رمز عبور ",
      SAVE_CHANGES: "ذخیره تغییرات",
      UPDATE_PROFILE_PICTURE: "بروزرسانی عکس پروفایل",
      TWO_FACTOR_LOGIN: "ورود دوعاملی",
      ACTIVE: "فعال",
      INACTIVE: "غیر فعال",
      ACTIVATING_TWO_FACTOR:
        "فعالسازی ورود دوعاملی از طریق Google Authenticator",
      SCAN_QR_CODE: "کد QR Code  را اسکن کنید",
      ENTER_KEY_SECRET:
        "یا Secret Key زیر را در برنامه Google Authenticator خود وارد کنید",
      LAST_LOGIN: "آخرین ورود شما",
      NAME: "نام",
      LAST_NAME: "نام خانوادگی",
      SAVE_INFO: "ذخیره اطلاعات",
      CANCEL: "انصراف",
      CANCEL_ACTION: "لغو",
      CANCELLATION: "ابطال",
      CREATE_DATE: "تاریخ ایجاد",
      LATEST_CLIENT_VOUCHERS: "آخرین حواله مشتری",
      CLIENT_VOUCHERS_REPORT: "گزراش وچرهای مشتری",
      VOUCHER_CODE: "کد حواله",
      CURRENCY: " ارز",
      CURRENCY_PRICE_DEFINITION: "تعریف نرخ ارز",
      CURRENCY_PRICE_HISTORY: "تاریخچه نرخ ارز",
      REMITTANCE_CURRENCY_PRICE_HISTORY: "تاریخچه نرخ ارز حواله",
      OFFICIAL_CURRENCY_PRICE_HISTORY: "تاریخچه نرخ ارز رسمی",
      BANK_ACCOUNTS: "حساب های بانکی",
      ADD_BANK_ACCOUNT: "افزودن حساب بانکی",
      BANK_ACCOUNT_NUMBER: "تعداد حساب بانکی:",
      MANAGEMENT_BANK_ACCOUNT: "مدیریت حساب های بانکی",
      BANK_ACCOUNTS_HELPER:
        " حساب های بانکی صرفا برای نمایش در پنل مشتریان است تا برای ثبت مقاصد واریز انتخاب استفاده نمایند و کاربرد دیگری ندارد.",
      ACCOUNT_NUMBER: "شماره حساب",
      BANK: "بانک",
      AMOUNT: "مبلغ",
      WAGE: "کارمزد",
      TRANSACTION_ID: "شناسه تراکنش",
      CLIENT_RECIEVED_REPORT: "گزارش دریافتنی های مشتری",
      DEPOSIT_TOMAN: "واریزی (تومان)",
      CREDIT: "اعتبار",
      DEPOSIT_DATE: "تاریخ واریز",
      ATTACHMENT_TYPE: "نوع پیوست ",
      LAST_ACTION_DATE: "تاریخ آخرین عملیات",
      EXCHANGE_RATE_REMITTANCE_RECEIVANLES_TOMAN: "نرخ ارز حواله در زمان ثبت واریزی (تومان)",
      LAST_CLIENT_DEPOSIT: "آخرین واریزی مشتری",
      CHANGE_PASSWORD: "تغییر رمز عبور",
      CHANGE_PASS_HINT1:
        "در صورت تغییر رمز عبور مشتری، نتقال رمز به ایشان بایستی از طریق کانال امن انجام شود.",
      CHANGE_PASS_HINT2:
        "رمز عبور باید حداقل ۸ رقم و ترکیب از حروف کوچک و بزرگ انگلیسی و اعداد باشد.",
      CLIENT_LAST_SIGNIN: "آخرین ورود مشتری",
      SELECT_ALL: "انتخاب همه موارد",
      MANAGE_CLIENT_PERMISSIONS: "دسترسی مشتری را مدیریت کنید",
      SEARCH: "جستجو",
      USERS_MANAGEMENT: "مدیرت کاربران",
      CREATE_ADMIN_USER: "امکان ایجاد کاربر ادمین",
      CREATE_CLIENT_USER: "امکان ایجاد کاربر مشتری",
      CLIENT_PERMISSION: "دسترسی مشتری",
      CREATE_CLIENT: "ایجاد مشتری",
      RETURN: "بازگشت",
      VOUCHERS_DASHBOARD: "داشبورد حواله ها",
      VOUCHERS_REPORT: "گزارش حواله ها",
      RECEIVABLES_DASHBOARD: "داشبورد دریافتنی ها",
      RECEIVABLES_REPORT: "گزارش دریافتنی ها",
      CHANNEL: "چنل",
      CLIENT: "مشتری",
      LATEST_VOUCHERS: "حواله های اخیر",
      VOUCHERS_STATE: "وضعیت حواله ها",
      MONTHLY: "ماهانه",
      WEEKLY: "هفتگی",
      DAILY: "روزانه",
      ISSUED_VOUCHERS_AMOUNT: "مبلغ حواله های صادر شده",
      VOUCHER_DOLLAR: "دلار حواله",
      OFFICIAL_DOLLAR: "دلار رسمی",
      LOADING: "در حال بارگذاری...",
      ACTIONS: "عملیات",
      VOUCHER_DETAIL: "اطلاعات حواله",
      USED_DATE: "تاریخ مصرف",
      VOUCHER_STATUS: "وضعیت حواله",
      FROM_DATE: "از تاریخ",
      TO_DATE: "تا تاریخ",
      USER_LOGS_MANAGEMENT: "مدیریت لاگ کاربران",
      USER_NAME: "لاگ کاربر",
      USER: "کاربر",
      EVENT_ID: "شناسه رویداد",
      EVENT_DESC: "شرح رویداد",
      TIME: "زمان",
      ACTION: "عمیات",
      LOGS: "لاگ ها",
      RECEIVABLE_STATUS: "وضعیت دریافتنی ها",
      DEPOSIT_CUSTOMER_TOMAN: "واریزی مشتری (تومان)",
      TOTAL_PAYABLES_TOMAN: "کل پرداختنی ها (تومان)",
      CREDIT_CUSTOMER: "اعتبار مشتریان",
      LATEST_RECEIVABLES: "آخرین دریافتنی‌ها ",
      FROM_AMOUNT: "از مبلغ",
      TO_AMOUNT: "تا مبلغ",
      RECEIVABLES: "دریافتنی‌ها ",
      RECEIVABLES_INFO: "اطلاعات دریافتنی",
      RECEIVABLE_INFO: "اطلاعات دریافتنی",
      RECEIVABLE_STATUS: "وضعیت دریافتنی",
      ATTACHMENT: "پیوست ",
      ATTACHMENT_VIEW: "مشاهده پیوست",
      DETAILS_VIEW: "مشاهده جزییات",
      EXCHANGE_RATE_REMITTANCE_RECEIVANLES_TOMAN:
        "نرخ ارز حواله در زمان ثبت دریافتنی (تومان)",
      EXCHANGE_RATE_REMITTANCE_ALLOCATE_TO_CUSTOMER_TOMAN:
        "نرخ ارز حواله تخصیصی به مشتری (تومان)",
      CREDIT_ALLOCATE_TO_CUSTOMER: "اعتبار تخصیصی به مشتری",
      CURRENT_EXCHANGE_RATE_REMITTANCE: "نرخ ارز لحظه ای حواله",
      DESCRIPTION:"توضیحات",
      DESCRIPTION_DEPOSIT:"توضیحات واریزی",
      DESCRIPTION_SENTENCE: "علت رد تراکنش در اینجا به مشتری شرح داده می شود.",
      ADMIN_LAST_SIGNIN: "آخرین ورود راهبر",
      MANAGE_ADMIN_PERMISSIONS: "دسترسی  را مدیریت کنید",
      ADMIN_STATE: "وضعیت راهبر",
      EXCHANGE_RATE: "نرخ ارز حواله",
      EXCHANGE_RATE_HELPER:
        "توجه: نرخ ارز حواله در کلیه محاسبات سامانه محاسبه می گردد.",
      ATTENTION: "توجه",
      BANK_NAME: "نام بانک",
      ADD_ACCOUNT: "افزودن حساب",

      API_INFORMATION: "اطلاعات API",
      API_KEY: "رمز API",
      API_KEY_HELPER_TEXT: "رمز API را در اختیار افراد غیر قرار ندهید.",
      WEBSITE: "وب سایت (اختیاری)",
      WEBSITE_HELPER_TEXT: "آدرس بایستی https باشد.",
      IP_LIMIT: "محدودیت های IP",
      ADD: "افزودن",
      DELETE: "حذف",
      VALID_IP: "آی پی مجاز ",
      IP_ERROR: "IP معتبر نمی‌باشد.",
      DEPOSIT_TOMAN: "مبلغ واریزی (تومان)",
      PAYMENT_DOLLAR: "دلار حواله USD",
      ALLOCATED_CREDIT: "اعتبار USD تخصیصی به شما",
      FIELD_ERROR_MESSAGE: "این فیلد اجباری است.",
      BANK_AND_ACCOUNT_NUMBER: "بانک و شماره حساب",
      DEPOSIT_TYPE: "نوع واریزی",
      DESCRIPTION_OPTIONAL: "توضیحات (اختیاری)",
      ATTACHED_FILE: "فایل پیوست",
      UPLOADER_ALERT: "فایل خود را اینجا بکشید و رها کنید یا انتخاب کنید.",
      SELECT_ATTACHMENT: "انتخاب پیوست",
      UPLOADER_HELPER_TEXT: "فرمت مجاز :  پسوند jpeg ، jpg ، png یا pdf و با حجم حداکثر ۱۰۰۰ کیلوبایت"
    },
  },
};
