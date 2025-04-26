import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  tr: {
    translation: {
      appName: "OTOBÜSÜM YANIMDA",
      homeTitle: "Anasayfa",
      welcomeMessage: "Otobüsüm Yanımda uygulamasına hoşgeldiniz. Gerçek zamanlı verilerle şehir içi otobüs yoğunluğunu takip edebilirsiniz.",
      appDescription: "Hat ara",
      search: "Ara",

      settings: "Ayarlar",
      language: "Dil",
      turkish: "Türkçe",
      english: "İngilizce",
      theme: "Tema",
      notifications: "Bildirimler",
      refreshRate: "Veri Yenileme Süresi",
      mapView: "Harita Görünümü",
      refreshOption: "5 Dakika",
      minutes: "Dakika", 

      pieChart: "Otobüs Dağılımı",
      stopDensity: "Güncel Durak Yoğunluğu",
      weeklyDensity: "Haftalık Otobüs Yoğunluğu",
      realTimeTracking: "Anlık Otobüs Takibi",

      densityTitle: "Yoğunluk",
      showDetails: "Detayları Göster",
      hideDetails: "Detayları Gizle",

      contactTitle: "İletişim",
      about: "Hakkımızda",
      aboutInfo: "Otobüsüm Yanımda Hakkında",
      aboutText1: "'Otobüsüm Yanımda' uygulaması, şehir içi otobüs yoğunluğunu gerçek zamanlı ve tahmini verilerle sunar.",
      aboutText2: "Uygulama, makine öğrenmesi ve IoT verilerini kullanarak, en güncel ve doğru bilgiyi sağlamayı amaçlar.",
      version: "Sürüm",
      kvkk: "KVKK Aydınlatma Metni",
      kvkkTitle: "KVKK Aydınlatma Metni",
      kvkkText: "KVKK kapsamında, kullanıcı verilerinin nasıl işlendiği, hangi amaçlarla toplandığı ve saklandığı hakkında detaylı bilgi verilmektedir. Bu metinde verilerinizin güvenliği, paylaşım koşulları ve haklarınız açıklanır. Lütfen metni dikkatlice okuyunuz.",
      contact: "İletişim",
      contactAddress: "Ankara Yıldırım Beyazıt Üniversitesi\nÜniversite Caddesi, Esenboğa, Ankara, Türkiye",
      contactPhone: "Telefon: +90 312 906 1000",
      rateUs: "Bizi Değerlendirin",

      bus_schedule: {
        title: "Hat {{busId}} Saatleri",
        departure: "Saat",
        tripTime: "Sefer Saatleri",
        updatedTime: "Güncel Saatler",
        no_data: "Veri bulunamadı veya hat eşleşmedi."
      },

      busDistribution: {
        busDistribution: "Otobüs Dağılımı",
        underMaintenance: "Bakımda olan Otobüsler",
        notGoingOnTrip: "Sefere Çıkmayacak Otobüsler",
        waitingBuses: "Bekleyen Otobüsler",
        departedBuses: "Giden Otobüsler",
        underMaintenancePercentage: "Bakımda olan Otobüsler",
        notGoingOnTripPercentage: "Sefere Çıkmayacak Otobüsler",
        waitingBusesPercentage: "Bekleyen Otobüsler",
        departedBusesPercentage: "Giden Otobüsler",
        timeRange: "Saat Aralığı",
        busTime: "Otobüs Saati",
        tripStatus: "Sefer Durumu",
        buses: "Otobüs",
        completed: "Tamamlandı",
        postponed: "Ertelendi"
      },

      busBarChart: {
        weeklyBusDensity: "Haftalık Otobüs Yoğunluğu",
        dailyDistribution: "Günlere Dağılım",
        usedBusRate: "Kullanılan Otobüs Oranı",
        busiestHours: "En Yoğun Saatler",
        busiestHoursLabel: "En Yoğun Saatler",
        Monday: "Pazartesi",
        Tuesday: "Salı",
        Wednesday: "Çarşamba",
        Thursday: "Perşembe",
        Friday: "Cuma",
        Saturday: "Cumartesi",
        Sunday: "Pazar",
        dark: "Karanlık",
        light: "Açık"
      },

      stopDensity: {
        title: "Güncel Durak Yoğunluğu",
        hour: "Saat",
        percent: "%",
        full: "Dolu",
        empty: "Boş"
      },

      realTimeTracking: {
        title: "Anlık Otobüs Takibi",
        routeName: "Hat Adı"
      },

      // Yeni eklendi: 
      thankYouMessage: "Geri bildirim için teşekkür ederiz!"
    }
  },
  en: {
    translation: {
      appName: "OTOBUSUM YANIMDA",
      homeTitle: "Home",
      welcomeMessage: "Welcome to the Otobüsüm Yanımda application. Track real-time bus density in your city.",
      appDescription: "Search line",
      search: "Search",

      settings: "Settings",
      language: "Language",
      turkish: "Turkish",
      english: "English",
      theme: "Theme",
      notifications: "Notifications",
      refreshRate: "Refresh Rate",
      mapView: "Map View",
      refreshOption: "5 Minutes",
      minutes: "Minutes", 

      pieChart: "Bus Distribution",
      stopDensity: "Current Stop Density",
      weeklyDensity: "Weekly Bus Density",
      realTimeTracking: "Real-Time Bus Tracking",

      densityTitle: "Density",
      showDetails: "Show Details",
      hideDetails: "Hide Details",

      contactTitle: "Contact",
      about: "About",
      aboutInfo: "About Otobüsüm Yanımda",
      aboutText1: "The 'Otobüsüm Yanımda' app displays real-time and forecast bus density data.",
      aboutText2: "It aims to provide the most current and accurate information using machine learning and IoT data.",
      version: "Version",
      kvkk: "KVKK Disclosure",
      kvkkTitle: "KVKK Disclosure",
      kvkkText: "Under KVKK, detailed information is provided regarding how your personal data is processed, for what purposes it is collected and stored, and how it is secured and shared. Please read this disclosure carefully.",
      contact: "Contact",
      contactAddress: "Ankara Yıldırım Beyazıt University, University Street, Esenboğa, Ankara, Turkey",
      contactPhone: "Phone: +90 312 906 1000",
      rateUs: "Rate Us",

      bus_schedule: {
        title: "Route {{busId}} Timetable",
        departure: "Departure",
        tripTime: "Trip Time",
        updatedTime: "Updated Time",
        no_data: "No data found or route not matched."
      },

      busDistribution: {
        busDistribution: "Bus Distribution",
        underMaintenance: "Buses Under Maintenance",
        notGoingOnTrip: "Buses Not Going on Trip",
        waitingBuses: "Waiting Buses",
        departedBuses: "Departed Buses",
        underMaintenancePercentage: "Buses Under Maintenance",
        notGoingOnTripPercentage: "Buses Not Going On Trip",
        waitingBusesPercentage: "Waiting Buses",
        departedBusesPercentage: "Departed Buses",
        timeRange: "Time Range",
        busTime: "Bus Time",
        tripStatus: "Trip Status",
        buses: "Buses",
        completed: "Completed",
        postponed: "Postponed"
      },

      busBarChart: {
        weeklyBusDensity: "Weekly Bus Density",
        dailyDistribution: "Daily Distribution",
        usedBusRate: "Used Bus Rate",
        busiestHours: "Busiest Hours",
        busiestHoursLabel: "Busiest Hours",
        Monday: "Monday",
        Tuesday: "Tuesday",
        Wednesday: "Wednesday",
        Thursday: "Thursday",
        Friday: "Friday",
        Saturday: "Saturday",
        Sunday: "Sunday",
        dark: "Dark",
        light: "Light"
      },

      stopDensity: {
        title: "Current Stop Density",
        hour: "Hour",
        percent: "%",
        full: "Full",
        empty: "Empty"
      },

      realTimeTracking: {
        title: "Real-Time Bus Tracking",
        routeName: "Route Name"
      },

      // Yeni eklendi: 
      thankYouMessage: "Thank you for your feedback!"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'tr',  // Başlangıç dili olarak Türkçe ayarladık
    fallbackLng: 'tr',  // Eğer belirtilen dilde bir çeviri yoksa, Türkçe kullanılır
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
