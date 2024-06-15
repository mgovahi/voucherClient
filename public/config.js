window.appSettings = {
  languages: [
    { id: "fa", title: "فارسی", flag: "IR" },
    { id: "en", title: "English", flag: "USA" },
  ],
  allowLanguageSelection: true,
  defaultLanguage: localStorage.getItem("lang") || "fa",
  apiBaseUrl: "https://api.stts.ir/panel/api/v1/", //"https://shop.stts.ir/panel/api/v1/", // "https://api.stts.ir/panel/api/v1/",
  ssoUrl: "https://ids.stts.ir/", // "http://185.105.184.57:5001/",
};

window.appSettings.resources = {
  en: {
    translation: {
      APPLICATIONS: "Applications",
      DASHBOARD: "Dashboard",
      ADD_DEPOSIT: "Add Deposit",
      DEPOSITS_REPORT: "Deposits Report",
      VOUCHERS: "Vouchers",
      BALANCE_REPORT: "Balance Report",
      API_CONFIGURATION: "API Configuration",
      DEPOSIT_SENTENCE: "If you need a Voucher, please add your deposit",
      NEW_DEPOSIT: "New Deposit",
      API_DOCUMENTS: "API Documents",
      API_INFORMATION: "API Information",
      API_KEY: "API Key",
      API_KEY_HELPER_TEXT: "Do not share the API Key with others",
      WEBSITE_OPTIONAL: "Website (Optional)",
      WEBSITE_HELPER_TEXT: "Link must be https",
      WEBSITE_ERROR: "URL is'nt valid",
      SAVE_INFO: "Save Changes",
      IP_LIMIT: "IP Limit",
      VALID_IP: "Valid IP",
      IP_ERROR: "IP is'nt valid",
      DELETE: "Delete",
      ADD: "Add",
      WELCOME_TITLE: "Welcome to VoucherUSD",
      WELCOME_MESSAGE:
        "A short introduction and welcome text to Voucher USD is placed here. A short introduction and welcome text to Voucher USD is placed here.A short introduction and welcome text to Voucher USD is placed here.",
      ADD_BALANCE: "Add Deposit",
      YOUR_BALANCE: "Your Balance",
      WALLET: "Wallet",
      VOUCHER: "Voucher",
      TOTAL_BALANCE: "Total Balance",
      TOTAL_VOUCHER_ISSUED: "Total Generated Vouchers",
      TOTAL_NUMBER_VOTCHER: "Total Vouchers",
      TOTAL_VOUCHER_CONSUMED: "Total Used Vouchers",
      VOUCHER_LAST_WEEK: "Vouchers in Last Week",
      VOUCHER_DOLLAR: "Voucher",
      SEARCH: "Search",
      GENERATED_VOUCHERS: "Generated Vouchers",
      USED_VOUCHERS: "Used Vouchers",
      LATEST_YOUR_BALANCE: "Your Latest Balance",
      ROW_NUMBER: "Row",
      BALANCE_TYPE: "Balance Type",
      DOCUMENT_ID: "Document ID",
      BALANCE: "Balance",
      DOWNLOAD: "Download",
      FROM_DATE: "From Date",
      TO_DATE: "To Date",
      PAGE_TO: "To",
      FROM: "From",
      ITEMS_PER_PAGE: "Items per page",
      ALL_ITEMS: "All",
      VOUCHERS_REPORT: "Vouchers",
      CANCELLATION: "Cancel",
      DETAILS: "Details",
      LOADING: "Loading",
      VOUCHER_CODE: "Voucher Code",
      CHANNEL: "Channel",
      TRANSACTION_ID: "Transaction ID",
      STATUS: "Status",
      USED_DATE: "Used Date",
      UNUSED_VOUCHER: "unused voucher",
      CANCELD_VOUCHER: "canceld voucher",
      CURRENCY: "Currency",
      AMOUNT: "amount",
      TRANSACTION_FEE: "transaction fee",
      CREATE_DATE: "Create Date",
      ACTION: "action",
      ACTIVE: "action",
      USED: "used",
      MERGED: "MERGED",
      CANCELED: "canceled",
      ADD_DEPOSIT_HEADER_ACTION: "Your deposit will be added to your balance after confirmation.",
      DEPOSIT_AMOUNT_TOMAN: "Amount (Toman)",
      PAYMENT_DOLLAR: "Vouchers USD",
      ALLOCATED_CREDIT: "Your Voucher Credit",
      BANK_AND_ACCOUNT_NUMBER: "Bank Accounts",
      DEPOSIT_TYPE: "Deposit Type",
      DESCRIPTION_OPTIONAL: "Description (Optional)",
      ATTACHED_FILE: "Attachment File",
      UPLOADER_ALERT: "Please Drag & Drop your file or choose",
      SELECT_ATTACHMENT: "Choose Attachment",
      UPLOADER_HELPER_TEXT: "File Type: png , jpg , jpeg or pdf with Max 1000KB",
      FIELD_ERROR_MESSAGE: "This field is required.",
      FILE_SIZE_ERROR: "Your file is over 1000 KB. Try uploading a smaller one.",
      SUCCESS_TRANSACTION: "Successful Transaction",
      SUCCESS_ALERT_HELPER_TEXT: "Your balance will be increased after confirmation. Track the transaction status in the Deposits Report.",
      ADD_NEW_DEPOSIT: "Add New Deposit",
      PASARGAD_BANK: "Pasargad Bank",
      TEJARAT_BANK: "Tejarat Bank",
      IRAN_ZAMIN_BANK: "Iran Zamin Bank",
      TOMAN: "Toman",
      ZERO_TOMAN: "Zero Toman",
      PAYA: "Paya",
      SATNA: "Satna",
      POL: "Pol",
      TRANSACTION_ID_TEXT_PART_ONE: "Your deposit with transaction ID",
      TRANSACTION_ID_TEXT_PART_TWO: "has been submitted successfully.",
      YOUR_DEPOSITS: "your deposits",
      CONFIRMED_DEPOSITS: "confirmd deposits",
      WAITING_CONFIRM_DEPOSITS: "waiting for confirm deposits",
      FROM_AMOUNT: "From Amount",
      TO_AMOUNT: "To Amount",
      DEPOSIT_TOMAN: "Deposit (Toman)",
      CREDIT: "Credit",
      DATE: "Date",
      LAST_ACTION_DATE: "Last Action",
      ATTACHMENT_TYPE: "Attachement Type",
      CONFIRMED: "Confirmed",
      WAITING: "Waiting",
      REJECTED: "Rejected",
      ADD_VOUCHER:"Add Voucher",
      USER_INFO:"User Information",
      CHANGE_PASSWORD:"Change Password",
      UPDATE_PROFILE_PICTURE:"Update Your Avatar",
      VOUCHER_ISSUED:"Generated Vouchers",
      VOUCHER_CONSUMED:"Used Vouchers",
      BALANCE:"Balance",
      TWO_FACTOR_LOGIN:"Two Factor Authentication",
      ACTIVATING_TWO_FACTOR:"Active your Two Factor Authentication",
      SCAN_QR_CODE:"Scan QR Code",
      ENTER_KEY_SECRET:"Or enter Secret Key in to Google Authenticator",
      LAST_LOGIN:"Your Latest Login",
      INACTIVE:"inActive ",
      PROFILE:"Profile",
      EXIT:"Exit",
      VOUCHER_GENERATE: "Voucher Generate",
      VOUCHERS_REPORT: "Vouchers Report",
     DEPOSIT_INFORMATION:"Deposit Information",
     DEPOSIT_STATUS:"Deposit Status",
     EXCHANGE_RATE_REMITTANCE_RECEIVANLES_TOMAN:"Rate of Voucher in Add Deposit (Toman)",
     DEPOSIT_DATE:"Deposit Date",
     DESCRIPTION_DEPOSIT:"Description",
     FINAL_BALANCE:"Your Final Balance",
     EXCHANGE_RATE_REMITTANCE_ALLOCATE_TO_CUSTOMER_TOMAN:"Rate of allocated to the customer",
     CREDIT_ALLOCATE_TO_CUSTOMER:"Final Balance",
     DESCRIPTION:"Description",
     DESCRIPTION_SENTENCE:"Description comes here",
     ATTACHMENT_VIEW:"View Attachement",
     CLOSE:"Close",
     ATTACHMENT:"Attachement"
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
      CLOSE: "بستن",
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
      CURRENCY: "ارز",
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
      TRANSACTION_FEE: "کارمزد",
      TRANSACTION_ID: "شناسه تراکنش",
      CLIENT_RECIEVED_REPORT: "گزارش دریافتنی های مشتری",
      DEPOSIT_TOMAN: "واریزی (تومان)",
      CREDIT: "اعتبار",
      DEPOSIT_DATE: "تاریخ واریز",
      ATTACHMENT_TYPE: "نوع پیوست ",
      LAST_ACTION_DATE: "تاریخ آخرین عملیات",
      EXCHANGE_RATE_REMITTANCE_RECEIVANLES_TOMAN:
        "نرخ ارز حواله در زمان ثبت واریزی (تومان)",
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
      DESCRIPTION: "توضیحات",
      DESCRIPTION_DEPOSIT: "توضیحات واریزی",
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
      WEBSITE_OPTIONAL: "وب سایت (اختیاری)",
      WEBSITE_HELPER_TEXT: "آدرس بایستی https باشد.",
      WEBSITE_ERROR: "آدرس معتبر نیست.",
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
      UPLOADER_ALERT: "فایل خود را این‌جا بکشید و رها کنید یا انتخاب کنید.",
      UPLOADER_HELPER_TEXT:
        "فرمت مجاز :  پسوند jpeg ، jpg ، png یا pdf و با حجم حداکثر ۱۰۰۰ کیلوبایت",
      FILE_SIZE_ERROR:
        "سایز فایل انتخاب شده نمی‌تواند بیشتر از 1000 کیلوبایت باشد. لطفاً یک فایل با سایز کوچکتر انتخاب کنید.",
      FILE_TYPE_ERROR: "فایل با فرمت‌های jpeg ، jpg ، png یا pdf مجاز است.",
      SELECT_ATTACHMENT: "انتخاب پیوست",
      DEPOSIT_AMOUNT_TOMAN: "مبلغ واریزی (تومان)",
      ADD_DEPOSIT_HEADER_ACTION:
        "واریزی شما پس از تایید به موجودی شما افزوده خواهد شد.",
      SUCCESS_TRANSACTION: "تراکنش موفق",
      SUCCESS_ALERT_WITH_TRANSACTION_ID:
        "واریزی شما به شناسه تراکنش {{transactionId}} با موفقیت ثبت گردید. ",
      SUCCESS_ALERT_HELPER_TEXT:
        "موجودی شما پس از تایید افزایش خواهد یافت. وضعیت تراکنش را در گزارش واریزی پیگیری نمایید.",
      DEPOSITS_REPORT: "گزارش واریزی ها",
      ADD_NEW_DEPOSIT: "ثبت واریزی جدید",
      BALANCE_REPORT: "گردش حساب",
      LATEST_YOUR_BALANCE: "موجودی اخیر شما",
      BALANCE_TYPE: "نوع موجودی",
      DOCUMENT_ID: "شناسه سند",
      DATE: "تاریخ",
      DOWNLOAD: "دانلود",
      YOUR_BALANCE: "موجودی شما",
      WALLET: "کیف پول",
      TOTAL_BALANCE: "موجودی کل",
      WELCOME_TITLE: "به VoucherUSD خوش آمدید",
      WELCOME_MESSAGE:
        "متن معرفی کوتاه و خوش آمدگویی به وچر یو اس دی اینجا قرار می گیرد. متن معرفی کوتاه و خوش آمدگویی به وچر یو اس دی اینجا قرار می گیرد. متن معرفی کوتاه و خوش آمدگویی به وچر یو اس دی اینجا قرار می گیرد",
      ADD_BALANCE: "افزودن موجودی",
      GENERATED_VOUCHERS: "حواله های صاده شده",
      USED_VOUCHERS: "حواله های مصرف شده",
      From: "از",
      ALL_ITEMS: "همه موارد",
      GENERATED_VOUCHERS: " مبلغ حواله‌ صادر شده شما ",
      USED_VOUCHERS: " مبلغ حواله مصرف شده شما",
      UNUSED_VOUCHER: "مبلغ حواله مصرف نشده شما",
      CANCELD_VOUCHER: "مبلغ حواله لغو شده",
      USED: "مصرف شده",
      MERGED: "ادغام شده",
      CANCELED: "لغو شده",
      PASARGAD_BANK: "بانک پاسارگاد",
      TEJARAT_BANK: "بانک تجارت",
      IRAN_ZAMIN_BANK: "بانک ایران‌زمین",
      TOMAN: "تومان",
      ZERO_TOMAN: "صفر تومان",
      PAYA: "پایا",
      SATNA: "ساتنا",
      POL: "پل",
      TRANSACTION_ID_TEXT_PART_ONE: "واریزی شما به شناسه تراکنش ",
      TRANSACTION_ID_TEXT_PART_TWO: "با موفقیت ثبت گردید.",
      YOUR_DEPOSITS: "واریزی های شما",
      CONFIRMED_DEPOSITS: "واریزی های تایید شده شما",
      WAITING_CONFIRM_DEPOSITS: "واریزی های در انتظار تایید شما",
      CONFIRMED: "تایید شده",
      WAITING: "در انتظار تایید",
      REJECTED: "رد شده",
      VOUCHER_GENERATE:"ایجاد حواله",
      PROFILE:"پروفایل",
      EXIT:"خروج",
      VOUCHER_GENERATE_HEADER_ACTION: "حواله شما پس از ثبت نهایی، تولید شده و کد حواله در اختیار شما قرار می‌گیرد.",
      DEPOSIT_INFORMATION:"اطلاعات واریزی",
      DEPOSIT_STATUS:"وضعیت واریزی",
       FINAL_BALANCE:"اعتبار تخصیصی به شما"
    },
  },
};
