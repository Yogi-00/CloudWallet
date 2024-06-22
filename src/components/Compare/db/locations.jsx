const locations = [
  { value: "africa", label: "Africa" },
  { value: "africa.south africa", label: "Africa South Africa" },
  {
    value: "africa.south africa.cap town",
    label: "Africa South Africa Cap Town",
  },
  {
    value: "africa.south africa.johannesburg",
    label: "Africa South Africa Johannesburg",
  },
  { value: "africa.south africa.le cap", label: "Africa South Africa Le Cap" },
  {
    value: "africa.south africa.le cap.1",
    label: "Africa South Africa Le Cap 1",
  },
  { value: "america", label: "America" },
  { value: "america.argentina", label: "America Argentina" },
  {
    value: "america.argentina.buenos aires",
    label: "America Argentina Buenos Aires",
  },
  {
    value: "america.argentina.buenos aires.1",
    label: "America Argentina Buenos Aires 1",
  },
  { value: "america.brazil", label: "America Brazil" },
  {
    value: "america.brazil.rio de janeiro",
    label: "America Brazil Rio De Janeiro",
  },
  { value: "america.brazil.sao paulo", label: "America Brazil Sao Paulo" },
  {
    value: "america.brazil.sao paulo state",
    label: "America Brazil Sao Paulo State",
  },
  { value: "america.brazil.sao paulo.1", label: "America Brazil Sao Paulo 1" },
  {
    value: "america.brazil.sao paulo.com",
    label: "America Brazil Sao Paulo Com",
  },
  { value: "america.brazil.vinhedo", label: "America Brazil Vinhedo" },
  { value: "america.brazil.vinhedo.com", label: "America Brazil Vinhedo Com" },
  { value: "america.canada", label: "America Canada" },
  { value: "america.canada.1", label: "America Canada 1" },
  { value: "america.canada.beauharnois", label: "America Canada Beauharnois" },
  {
    value: "america.canada.beauharnois.1",
    label: "America Canada Beauharnois 1",
  },
  {
    value: "america.canada.beauharnois.3",
    label: "America Canada Beauharnois 3",
  },
  {
    value: "america.canada.beauharnois.5",
    label: "America Canada Beauharnois 5",
  },
  { value: "america.canada.central", label: "America Canada Central" },
  { value: "america.canada.montreal", label: "America Canada Montreal" },
  {
    value: "america.canada.montreal.com",
    label: "America Canada Montreal Com",
  },
  { value: "america.canada.quebec city", label: "America Canada Quebec City" },
  { value: "america.canada.toronto", label: "America Canada Toronto" },
  { value: "america.canada.toronto.1", label: "America Canada Toronto 1" },
  { value: "america.canada.toronto.com", label: "America Canada Toronto Com" },
  { value: "america.canada.toronto.wl1", label: "America Canada Toronto Wl1" },
  { value: "america.chile", label: "America Chile" },
  { value: "america.chile.2", label: "America Chile 2" },
  { value: "america.chile.2.com", label: "America Chile 2 Com" },
  { value: "america.chile.santiago", label: "America Chile Santiago" },
  { value: "america.chile.santiago.1", label: "America Chile Santiago 1" },
  { value: "america.chile.santiago.com", label: "America Chile Santiago Com" },
  { value: "america.colombia", label: "America Colombia" },
  { value: "america.colombia.com", label: "America Colombia Com" },
  { value: "america.mexico", label: "America Mexico" },
  { value: "america.mexico.2", label: "America Mexico 2" },
  { value: "america.mexico.2.com", label: "America Mexico 2 Com" },
  { value: "america.mexico.queretaro", label: "America Mexico Queretaro" },
  {
    value: "america.mexico.queretaro state",
    label: "America Mexico Queretaro State",
  },
  {
    value: "america.mexico.queretaro.com",
    label: "America Mexico Queretaro Com",
  },
  { value: "america.united states", label: "America United States" },
  {
    value: "america.united states.ashburn",
    label: "America United States Ashburn",
  },
  {
    value: "america.united states.ashburn.com",
    label: "America United States Ashburn Com",
  },
  {
    value: "america.united states.ashburn.dod",
    label: "America United States Ashburn Dod",
  },
  {
    value: "america.united states.ashburn.gov",
    label: "America United States Ashburn Gov",
  },
  {
    value: "america.united states.chicago",
    label: "America United States Chicago",
  },
  {
    value: "america.united states.chicago.com",
    label: "America United States Chicago Com",
  },
  {
    value: "america.united states.chicago.dod",
    label: "America United States Chicago Dod",
  },
  {
    value: "america.united states.new york",
    label: "America United States New York",
  },
  {
    value: "america.united states.new york.1",
    label: "America United States New York 1",
  },
  {
    value: "america.united states.new york.2",
    label: "America United States New York 2",
  },
  {
    value: "america.united states.new york.3",
    label: "America United States New York 3",
  },
  {
    value: "america.united states.phoenix",
    label: "America United States Phoenix",
  },
  {
    value: "america.united states.phoenix.com",
    label: "America United States Phoenix Com",
  },
  {
    value: "america.united states.phoenix.dod",
    label: "America United States Phoenix Dod",
  },
  {
    value: "america.united states.phoenix.gov",
    label: "America United States Phoenix Gov",
  },
  {
    value: "america.united states.san francisco",
    label: "America United States San Francisco",
  },
  {
    value: "america.united states.san francisco.1",
    label: "America United States San Francisco 1",
  },
  {
    value: "america.united states.san francisco.2",
    label: "America United States San Francisco 2",
  },
  {
    value: "america.united states.san francisco.3",
    label: "America United States San Francisco 3",
  },
  {
    value: "america.united states.san jose",
    label: "America United States San Jose",
  },
  {
    value: "america.united states.san jose.com",
    label: "America United States San Jose Com",
  },
  { value: "america.usa", label: "America Usa" },
  { value: "america.usa.arizona", label: "America Usa Arizona" },
  { value: "america.usa.arizona.gouv", label: "America Usa Arizona Gouv" },
  { value: "america.usa.ashburn", label: "America Usa Ashburn" },
  { value: "america.usa.atlanta", label: "America Usa Atlanta" },
  { value: "america.usa.california", label: "America Usa California" },
  { value: "america.usa.california.1", label: "America Usa California 1" },
  { value: "america.usa.california.2", label: "America Usa California 2" },
  { value: "america.usa.california.3", label: "America Usa California 3" },
  {
    value: "america.usa.california.san jose",
    label: "America Usa California San Jose",
  },
  { value: "america.usa.chicago", label: "America Usa Chicago" },
  { value: "america.usa.dallas", label: "America Usa Dallas" },
  { value: "america.usa.east", label: "America Usa East" },
  { value: "america.usa.east.gov", label: "America Usa East Gov" },
  { value: "america.usa.florida", label: "America Usa Florida" },
  { value: "america.usa.florida.tampa", label: "America Usa Florida Tampa" },
  {
    value: "america.usa.florida.tampa.wl1",
    label: "America Usa Florida Tampa Wl1",
  },
  { value: "america.usa.fremont", label: "America Usa Fremont" },
  { value: "america.usa.hillsboro", label: "America Usa Hillsboro" },
  { value: "america.usa.illinois", label: "America Usa Illinois" },
  { value: "america.usa.iowa", label: "America Usa Iowa" },
  { value: "america.usa.new jersey", label: "America Usa New Jersey" },
  {
    value: "america.usa.new jersey.new york city",
    label: "America Usa New Jersey New York City",
  },
  {
    value: "america.usa.new jersey.new york city.1",
    label: "America Usa New Jersey New York City 1",
  },
  { value: "america.usa.new york", label: "America Usa New York" },
  { value: "america.usa.newark", label: "America Usa Newark" },
  {
    value: "america.usa.north california",
    label: "America Usa North California",
  },
  {
    value: "america.usa.north california.1",
    label: "America Usa North California 1",
  },
  {
    value: "america.usa.northern virginia",
    label: "America Usa Northern Virginia",
  },
  {
    value: "america.usa.northern virginia.1",
    label: "America Usa Northern Virginia 1",
  },
  {
    value: "america.usa.northern virginia.atlanta",
    label: "America Usa Northern Virginia Atlanta",
  },
  {
    value: "america.usa.northern virginia.atlanta.1",
    label: "America Usa Northern Virginia Atlanta 1",
  },
  {
    value: "america.usa.northern virginia.atlanta.wl1",
    label: "America Usa Northern Virginia Atlanta Wl1",
  },
  {
    value: "america.usa.northern virginia.boston",
    label: "America Usa Northern Virginia Boston",
  },
  {
    value: "america.usa.northern virginia.boston.1",
    label: "America Usa Northern Virginia Boston 1",
  },
  {
    value: "america.usa.northern virginia.charlotte",
    label: "America Usa Northern Virginia Charlotte",
  },
  {
    value: "america.usa.northern virginia.charlotte.wl1",
    label: "America Usa Northern Virginia Charlotte Wl1",
  },
  {
    value: "america.usa.northern virginia.chicago",
    label: "America Usa Northern Virginia Chicago",
  },
  {
    value: "america.usa.northern virginia.chicago.1",
    label: "America Usa Northern Virginia Chicago 1",
  },
  {
    value: "america.usa.northern virginia.chicago.wl1",
    label: "America Usa Northern Virginia Chicago Wl1",
  },
  {
    value: "america.usa.northern virginia.dallas",
    label: "America Usa Northern Virginia Dallas",
  },
  {
    value: "america.usa.northern virginia.dallas.1",
    label: "America Usa Northern Virginia Dallas 1",
  },
  {
    value: "america.usa.northern virginia.dallas.wl1",
    label: "America Usa Northern Virginia Dallas Wl1",
  },
  {
    value: "america.usa.northern virginia.detroit",
    label: "America Usa Northern Virginia Detroit",
  },
  {
    value: "america.usa.northern virginia.detroit.wl1",
    label: "America Usa Northern Virginia Detroit Wl1",
  },
  {
    value: "america.usa.northern virginia.houston",
    label: "America Usa Northern Virginia Houston",
  },
  {
    value: "america.usa.northern virginia.houston.1",
    label: "America Usa Northern Virginia Houston 1",
  },
  {
    value: "america.usa.northern virginia.kansas city",
    label: "America Usa Northern Virginia Kansas City",
  },
  {
    value: "america.usa.northern virginia.kansas city.1",
    label: "America Usa Northern Virginia Kansas City 1",
  },
  {
    value: "america.usa.northern virginia.miami",
    label: "America Usa Northern Virginia Miami",
  },
  {
    value: "america.usa.northern virginia.miami.1",
    label: "America Usa Northern Virginia Miami 1",
  },
  {
    value: "america.usa.northern virginia.miami.wl1",
    label: "America Usa Northern Virginia Miami Wl1",
  },
  {
    value: "america.usa.northern virginia.minneapolis",
    label: "America Usa Northern Virginia Minneapolis",
  },
  {
    value: "america.usa.northern virginia.minneapolis.1",
    label: "America Usa Northern Virginia Minneapolis 1",
  },
  {
    value: "america.usa.northern virginia.minneapolis.wl1",
    label: "America Usa Northern Virginia Minneapolis Wl1",
  },
  {
    value: "america.usa.northern virginia.new york city",
    label: "America Usa Northern Virginia New York City",
  },
  {
    value: "america.usa.northern virginia.new york city.wl1",
    label: "America Usa Northern Virginia New York City Wl1",
  },
  {
    value: "america.usa.northern virginia.philadelphia",
    label: "America Usa Northern Virginia Philadelphia",
  },
  {
    value: "america.usa.northern virginia.philadelphia.1",
    label: "America Usa Northern Virginia Philadelphia 1",
  },
  {
    value: "america.usa.northern virginia.washington dc",
    label: "America Usa Northern Virginia Washington Dc",
  },
  {
    value: "america.usa.northern virginia.washington dc.wl1",
    label: "America Usa Northern Virginia Washington Dc Wl1",
  },
  {
    value: "america.usa.northern virginia.wl1",
    label: "America Usa Northern Virginia Wl1",
  },
  { value: "america.usa.ohio", label: "America Usa Ohio" },
  { value: "america.usa.ohio.1", label: "America Usa Ohio 1" },
  { value: "america.usa.oregon", label: "America Usa Oregon" },
  { value: "america.usa.oregon.1", label: "America Usa Oregon 1" },
  { value: "america.usa.oregon.denver", label: "America Usa Oregon Denver" },
  {
    value: "america.usa.oregon.denver.1",
    label: "America Usa Oregon Denver 1",
  },
  {
    value: "america.usa.oregon.denver.wl1",
    label: "America Usa Oregon Denver Wl1",
  },
  {
    value: "america.usa.oregon.las vegas",
    label: "America Usa Oregon Las Vegas",
  },
  {
    value: "america.usa.oregon.las vegas.1",
    label: "America Usa Oregon Las Vegas 1",
  },
  {
    value: "america.usa.oregon.las vegas.wl1",
    label: "America Usa Oregon Las Vegas Wl1",
  },
  {
    value: "america.usa.oregon.los angeles",
    label: "America Usa Oregon Los Angeles",
  },
  {
    value: "america.usa.oregon.los angeles.1",
    label: "America Usa Oregon Los Angeles 1",
  },
  {
    value: "america.usa.oregon.los angeles.wl1",
    label: "America Usa Oregon Los Angeles Wl1",
  },
  { value: "america.usa.oregon.phoenix", label: "America Usa Oregon Phoenix" },
  {
    value: "america.usa.oregon.phoenix.1",
    label: "America Usa Oregon Phoenix 1",
  },
  {
    value: "america.usa.oregon.phoenix.wl1",
    label: "America Usa Oregon Phoenix Wl1",
  },
  {
    value: "america.usa.oregon.portland",
    label: "America Usa Oregon Portland",
  },
  {
    value: "america.usa.oregon.portland.1",
    label: "America Usa Oregon Portland 1",
  },
  { value: "america.usa.oregon.seattle", label: "America Usa Oregon Seattle" },
  {
    value: "america.usa.oregon.seattle.1",
    label: "America Usa Oregon Seattle 1",
  },
  {
    value: "america.usa.oregon.seattle.wl1",
    label: "America Usa Oregon Seattle Wl1",
  },
  { value: "america.usa.oregon.wl1", label: "America Usa Oregon Wl1" },
  { value: "america.usa.tennessee", label: "America Usa Tennessee" },
  {
    value: "america.usa.tennessee.nashville",
    label: "America Usa Tennessee Nashville",
  },
  {
    value: "america.usa.tennessee.nashville.wl1",
    label: "America Usa Tennessee Nashville Wl1",
  },
  { value: "america.usa.texas", label: "America Usa Texas" },
  { value: "america.usa.texas.gouv", label: "America Usa Texas Gouv" },
  { value: "america.usa.virginia", label: "America Usa Virginia" },
  { value: "america.usa.virginia.1", label: "America Usa Virginia 1" },
  { value: "america.usa.virginia.2", label: "America Usa Virginia 2" },
  { value: "america.usa.virginia.gouv", label: "America Usa Virginia Gouv" },
  { value: "america.usa.washington", label: "America Usa Washington" },
  { value: "america.usa.west", label: "America Usa West" },
  { value: "america.usa.west.gov", label: "America Usa West Gov" },
  { value: "america.usa.wyoming", label: "America Usa Wyoming" },
  { value: "asia", label: "Asia" },
  { value: "asia.australia", label: "Asia Australia" },
  { value: "asia.australia.melbourne", label: "Asia Australia Melbourne" },
  { value: "asia.australia.melbourne.1", label: "Asia Australia Melbourne 1" },
  { value: "asia.australia.perth", label: "Asia Australia Perth" },
  { value: "asia.australia.perth.1", label: "Asia Australia Perth 1" },
  { value: "asia.australia.sydney", label: "Asia Australia Sydney" },
  { value: "asia.australia.sydney.1", label: "Asia Australia Sydney 1" },
  { value: "asia.china", label: "Asia China" },
  { value: "asia.china.beijing", label: "Asia China Beijing" },
  { value: "asia.china.beijing.1", label: "Asia China Beijing 1" },
  { value: "asia.china.chengdu", label: "Asia China Chengdu" },
  { value: "asia.china.fuzhou", label: "Asia China Fuzhou" },
  { value: "asia.china.guangzhou", label: "Asia China Guangzhou" },
  { value: "asia.china.hangzhou", label: "Asia China Hangzhou" },
  { value: "asia.china.heyuan", label: "Asia China Heyuan" },
  { value: "asia.china.hohhot", label: "Asia China Hohhot" },
  { value: "asia.china.hong kong", label: "Asia China Hong Kong" },
  { value: "asia.china.hong kong.1", label: "Asia China Hong Kong 1" },
  { value: "asia.china.ningxia", label: "Asia China Ningxia" },
  {
    value: "asia.china.ningxia.zhongwei",
    label: "Asia China Ningxia Zhongwei",
  },
  {
    value: "asia.china.ningxia.zhongwei.1",
    label: "Asia China Ningxia Zhongwei 1",
  },
  { value: "asia.china.qingdao", label: "Asia China Qingdao" },
  { value: "asia.china.shanghai", label: "Asia China Shanghai" },
  { value: "asia.china.shenzhen", label: "Asia China Shenzhen" },
  { value: "asia.china.ulanqab", label: "Asia China Ulanqab" },
  { value: "asia.china.zhangjiakou", label: "Asia China Zhangjiakou" },
  { value: "asia.india", label: "Asia India" },
  { value: "asia.india.bangalore", label: "Asia India Bangalore" },
  { value: "asia.india.bangalore.1", label: "Asia India Bangalore 1" },
  { value: "asia.india.bengaluru", label: "Asia India Bengaluru" },
  { value: "asia.india.bengaluru.1", label: "Asia India Bengaluru 1" },
  { value: "asia.india.chennai", label: "Asia India Chennai" },
  { value: "asia.india.delhi", label: "Asia India Delhi" },
  { value: "asia.india.delhi.1", label: "Asia India Delhi 1" },
  { value: "asia.india.hyderabad", label: "Asia India Hyderabad" },
  { value: "asia.india.hyderabad.com", label: "Asia India Hyderabad Com" },
  { value: "asia.india.kolkata", label: "Asia India Kolkata" },
  { value: "asia.india.kolkata.1", label: "Asia India Kolkata 1" },
  { value: "asia.india.mumbai", label: "Asia India Mumbai" },
  { value: "asia.india.mumbai.1", label: "Asia India Mumbai 1" },
  { value: "asia.india.mumbai.com", label: "Asia India Mumbai Com" },
  { value: "asia.india.pune", label: "Asia India Pune" },
  { value: "asia.indonesia", label: "Asia Indonesia" },
  { value: "asia.indonesia.jakarta", label: "Asia Indonesia Jakarta" },
  { value: "asia.indonesia.jakarta.1", label: "Asia Indonesia Jakarta 1" },
  { value: "asia.japan", label: "Asia Japan" },
  { value: "asia.japan.osaka", label: "Asia Japan Osaka" },
  { value: "asia.japan.osaka.1", label: "Asia Japan Osaka 1" },
  { value: "asia.japan.osaka.com", label: "Asia Japan Osaka Com" },
  { value: "asia.japan.osaka.wl1", label: "Asia Japan Osaka Wl1" },
  { value: "asia.japan.tokyo", label: "Asia Japan Tokyo" },
  { value: "asia.japan.tokyo.1", label: "Asia Japan Tokyo 1" },
  { value: "asia.japan.tokyo.com", label: "Asia Japan Tokyo Com" },
  { value: "asia.japan.tokyo.wl1", label: "Asia Japan Tokyo Wl1" },
  { value: "asia.korea", label: "Asia Korea" },
  { value: "asia.korea.busan", label: "Asia Korea Busan" },
  { value: "asia.korea.daejeon", label: "Asia Korea Daejeon" },
  { value: "asia.korea.daejeon.wl1", label: "Asia Korea Daejeon Wl1" },
  { value: "asia.korea.seoul", label: "Asia Korea Seoul" },
  { value: "asia.korea.seoul.1", label: "Asia Korea Seoul 1" },
  { value: "asia.korea.seoul.wl1", label: "Asia Korea Seoul Wl1" },
  { value: "asia.malaysia", label: "Asia Malaysia" },
  { value: "asia.malaysia.kuala lumpur", label: "Asia Malaysia Kuala Lumpur" },
  { value: "asia.philippines", label: "Asia Philippines" },
  { value: "asia.philippines.manila", label: "Asia Philippines Manila" },
  { value: "asia.singapore", label: "Asia Singapore" },
  { value: "asia.singapore.1", label: "Asia Singapore 1" },
  { value: "asia.singapore.2", label: "Asia Singapore 2" },
  { value: "asia.singapore.2.com", label: "Asia Singapore 2 Com" },
  { value: "asia.singapore.com", label: "Asia Singapore Com" },
  { value: "asia.singapore.singapore", label: "Asia Singapore Singapore" },
  { value: "asia.south korea", label: "Asia South Korea" },
  { value: "asia.south korea.chuncheon", label: "Asia South Korea Chuncheon" },
  {
    value: "asia.south korea.chuncheon.com",
    label: "Asia South Korea Chuncheon Com",
  },
  { value: "asia.south korea.seoul", label: "Asia South Korea Seoul" },
  { value: "asia.south korea.seoul.com", label: "Asia South Korea Seoul Com" },
  { value: "asia.taiwan", label: "Asia Taiwan" },
  { value: "asia.taiwan.taipei", label: "Asia Taiwan Taipei" },
  { value: "asia.taiwan.taipei.1", label: "Asia Taiwan Taipei 1" },
  { value: "asia.thailand", label: "Asia Thailand" },
  { value: "asia.thailand.bangkok", label: "Asia Thailand Bangkok" },
  { value: "asia.thailand.bangkok.1", label: "Asia Thailand Bangkok 1" },
  { value: "asia.united arab emirates", label: "Asia United Arab Emirates" },
  {
    value: "asia.united arab emirates.dubai",
    label: "Asia United Arab Emirates Dubai",
  },
  { value: "europe", label: "Europe" },
  { value: "europe.denmark", label: "Europe Denmark" },
  { value: "europe.denmark.copenhagen", label: "Europe Denmark Copenhagen" },
  {
    value: "europe.denmark.copenhagen.1",
    label: "Europe Denmark Copenhagen 1",
  },
  { value: "europe.finland", label: "Europe Finland" },
  { value: "europe.finland.helsinki", label: "Europe Finland Helsinki" },
  { value: "europe.finland.helsinki.1", label: "Europe Finland Helsinki 1" },
  { value: "europe.finland.helsinki.2", label: "Europe Finland Helsinki 2" },
  { value: "europe.france", label: "Europe France" },
  { value: "europe.france.gravelines", label: "Europe France Gravelines" },
  { value: "europe.france.gravelines.1", label: "Europe France Gravelines 1" },
  { value: "europe.france.gravelines.3", label: "Europe France Gravelines 3" },
  { value: "europe.france.gravelines.5", label: "Europe France Gravelines 5" },
  { value: "europe.france.gravelines.7", label: "Europe France Gravelines 7" },
  { value: "europe.france.marseille", label: "Europe France Marseille" },
  {
    value: "europe.france.marseille.com",
    label: "Europe France Marseille Com",
  },
  { value: "europe.france.paris", label: "Europe France Paris" },
  { value: "europe.france.paris.1", label: "Europe France Paris 1" },
  { value: "europe.france.paris.2", label: "Europe France Paris 2" },
  { value: "europe.france.paris.3", label: "Europe France Paris 3" },
  { value: "europe.france.paris.com", label: "Europe France Paris Com" },
  { value: "europe.france.roubaix", label: "Europe France Roubaix" },
  { value: "europe.france.strasbourg", label: "Europe France Strasbourg" },
  { value: "europe.france.strasbourg.1", label: "Europe France Strasbourg 1" },
  { value: "europe.france.strasbourg.3", label: "Europe France Strasbourg 3" },
  { value: "europe.france.strasbourg.5", label: "Europe France Strasbourg 5" },
  { value: "europe.germany", label: "Europe Germany" },
  { value: "europe.germany.berlin", label: "Europe Germany Berlin" },
  { value: "europe.germany.berlin.wl1", label: "Europe Germany Berlin Wl1" },
  { value: "europe.germany.dortmund", label: "Europe Germany Dortmund" },
  {
    value: "europe.germany.dortmund.wl1",
    label: "Europe Germany Dortmund Wl1",
  },
  { value: "europe.germany.falkenstein", label: "Europe Germany Falkenstein" },
  { value: "europe.germany.frankfurt", label: "Europe Germany Frankfurt" },
  { value: "europe.germany.frankfurt.1", label: "Europe Germany Frankfurt 1" },
  { value: "europe.germany.frankfurt.2", label: "Europe Germany Frankfurt 2" },
  {
    value: "europe.germany.frankfurt.com",
    label: "Europe Germany Frankfurt Com",
  },
  {
    value: "europe.germany.frankfurt.sov",
    label: "Europe Germany Frankfurt Sov",
  },
  { value: "europe.germany.hamburg", label: "Europe Germany Hamburg" },
  { value: "europe.germany.hamburg.1", label: "Europe Germany Hamburg 1" },
  { value: "europe.germany.limburg", label: "Europe Germany Limburg" },
  { value: "europe.germany.munich", label: "Europe Germany Munich" },
  { value: "europe.germany.munich.wl1", label: "Europe Germany Munich Wl1" },
  { value: "europe.germany.nuremberg", label: "Europe Germany Nuremberg" },
  { value: "europe.ireland", label: "Europe Ireland" },
  { value: "europe.ireland.1", label: "Europe Ireland 1" },
  { value: "europe.italy", label: "Europe Italy" },
  { value: "europe.italy.milan", label: "Europe Italy Milan" },
  { value: "europe.italy.milan.1", label: "Europe Italy Milan 1" },
  { value: "europe.italy.milan.com", label: "Europe Italy Milan Com" },
  { value: "europe.italy.milano", label: "Europe Italy Milano" },
  { value: "europe.netherlands", label: "Europe Netherlands" },
  {
    value: "europe.netherlands.amsterdam",
    label: "Europe Netherlands Amsterdam",
  },
  {
    value: "europe.netherlands.amsterdam.1",
    label: "Europe Netherlands Amsterdam 1",
  },
  {
    value: "europe.netherlands.amsterdam.2",
    label: "Europe Netherlands Amsterdam 2",
  },
  {
    value: "europe.netherlands.amsterdam.3",
    label: "Europe Netherlands Amsterdam 3",
  },
  {
    value: "europe.netherlands.amsterdam.com",
    label: "Europe Netherlands Amsterdam Com",
  },
  { value: "europe.norway", label: "Europe Norway" },
  { value: "europe.norway.oslo", label: "Europe Norway Oslo" },
  { value: "europe.norway.stavanger", label: "Europe Norway Stavanger" },
  { value: "europe.poland", label: "Europe Poland" },
  { value: "europe.poland.warsaw", label: "Europe Poland Warsaw" },
  { value: "europe.poland.warsaw.1", label: "Europe Poland Warsaw 1" },
  { value: "europe.poland.warsaw.2", label: "Europe Poland Warsaw 2" },
  { value: "europe.poland.warsow", label: "Europe Poland Warsow" },
  { value: "europe.poland.warsow.1", label: "Europe Poland Warsow 1" },
  { value: "europe.portugal", label: "Europe Portugal" },
  { value: "europe.portugal.lisbon", label: "Europe Portugal Lisbon" },
  { value: "europe.portugal.lisbon.1", label: "Europe Portugal Lisbon 1" },
  { value: "europe.serbia", label: "Europe Serbia" },
  { value: "europe.serbia.jovanovac", label: "Europe Serbia Jovanovac" },
  {
    value: "europe.serbia.jovanovac.com",
    label: "Europe Serbia Jovanovac Com",
  },
  { value: "europe.spain", label: "Europe Spain" },
  { value: "europe.spain.madrid", label: "Europe Spain Madrid" },
  { value: "europe.spain.madrid.com", label: "Europe Spain Madrid Com" },
  { value: "europe.spain.madrid.sov", label: "Europe Spain Madrid Sov" },
  { value: "europe.sweden", label: "Europe Sweden" },
  { value: "europe.sweden.gavle", label: "Europe Sweden Gavle" },
  { value: "europe.sweden.staffanstorp", label: "Europe Sweden Staffanstorp" },
  { value: "europe.sweden.stockholm", label: "Europe Sweden Stockholm" },
  { value: "europe.sweden.stockholm.1", label: "Europe Sweden Stockholm 1" },
  { value: "europe.sweden.zurich", label: "Europe Sweden Zurich" },
  { value: "europe.sweden.zurich.com", label: "Europe Sweden Zurich Com" },
  { value: "europe.switzerland", label: "Europe Switzerland" },
  { value: "europe.switzerland.geneva", label: "Europe Switzerland Geneva" },
  { value: "europe.switzerland.zurich", label: "Europe Switzerland Zurich" },
  {
    value: "europe.switzerland.zurich.1",
    label: "Europe Switzerland Zurich 1",
  },
  { value: "europe.united kingdom", label: "Europe United Kingdom" },
  {
    value: "europe.united kingdom.cardiff",
    label: "Europe United Kingdom Cardiff",
  },
  {
    value: "europe.united kingdom.london",
    label: "Europe United Kingdom London",
  },
  {
    value: "europe.united kingdom.london.1",
    label: "Europe United Kingdom London 1",
  },
  {
    value: "europe.united kingdom.london.com",
    label: "Europe United Kingdom London Com",
  },
  {
    value: "europe.united kingdom.london.gov",
    label: "Europe United Kingdom London Gov",
  },
  {
    value: "europe.united kingdom.london.wl1",
    label: "Europe United Kingdom London Wl1",
  },
  {
    value: "europe.united kingdom.manchester",
    label: "Europe United Kingdom Manchester",
  },
  {
    value: "europe.united kingdom.manchester.wl1",
    label: "Europe United Kingdom Manchester Wl1",
  },
  {
    value: "europe.united kingdom.newport",
    label: "Europe United Kingdom Newport",
  },
  {
    value: "europe.united kingdom.newport.com",
    label: "Europe United Kingdom Newport Com",
  },
  {
    value: "europe.united kingdom.newport.gov",
    label: "Europe United Kingdom Newport Gov",
  },
  { value: "middle east", label: "Middle East" },
  { value: "middle east.bahrain", label: "Middle East Bahrain" },
  { value: "middle east.bahrain.1", label: "Middle East Bahrain 1" },
  { value: "middle east.israel", label: "Middle East Israel" },
  { value: "middle east.israel.2", label: "Middle East Israel 2" },
  { value: "middle east.israel.2.com", label: "Middle East Israel 2 Com" },
  {
    value: "middle east.israel.jerusalem",
    label: "Middle East Israel Jerusalem",
  },
  {
    value: "middle east.israel.jerusalem.com",
    label: "Middle East Israel Jerusalem Com",
  },
  { value: "middle east.oman", label: "Middle East Oman" },
  { value: "middle east.oman.muscat", label: "Middle East Oman Muscat" },
  { value: "middle east.oman.muscat.1", label: "Middle East Oman Muscat 1" },
  { value: "middle east.qatar", label: "Middle East Qatar" },
  { value: "middle east.qatar.doha", label: "Middle East Qatar Doha" },
  { value: "middle east.saudi arabia", label: "Middle East Saudi Arabia" },
  { value: "middle east.saudi arabia.2", label: "Middle East Saudi Arabia 2" },
  {
    value: "middle east.saudi arabia.2.com",
    label: "Middle East Saudi Arabia 2 Com",
  },
  { value: "middle east.saudi arabia.3", label: "Middle East Saudi Arabia 3" },
  {
    value: "middle east.saudi arabia.3.com",
    label: "Middle East Saudi Arabia 3 Com",
  },
  {
    value: "middle east.saudi arabia.jeddah",
    label: "Middle East Saudi Arabia Jeddah",
  },
  {
    value: "middle east.saudi arabia.jeddah.com",
    label: "Middle East Saudi Arabia Jeddah Com",
  },
  {
    value: "middle east.united arab emirates",
    label: "Middle East United Arab Emirates",
  },
  {
    value: "middle east.united arab emirates.1",
    label: "Middle East United Arab Emirates 1",
  },
  {
    value: "middle east.united arab emirates.abu dhabi",
    label: "Middle East United Arab Emirates Abu Dhabi",
  },
  {
    value: "middle east.united arab emirates.abu dhabi.com",
    label: "Middle East United Arab Emirates Abu Dhabi Com",
  },
  {
    value: "middle east.united arab emirates.dubai",
    label: "Middle East United Arab Emirates Dubai",
  },
  {
    value: "middle east.united arab emirates.dubai.com",
    label: "Middle East United Arab Emirates Dubai Com",
  },
  { value: "oceania", label: "Oceania" },
  { value: "oceania.australia", label: "Oceania Australia" },
  { value: "oceania.australia.canberra", label: "Oceania Australia Canberra" },
  {
    value: "oceania.australia.canberra.1",
    label: "Oceania Australia Canberra 1",
  },
  {
    value: "oceania.australia.canberra.2",
    label: "Oceania Australia Canberra 2",
  },
  {
    value: "oceania.australia.melbourne",
    label: "Oceania Australia Melbourne",
  },
  {
    value: "oceania.australia.melbourne.com",
    label: "Oceania Australia Melbourne Com",
  },
  {
    value: "oceania.australia.new south wales",
    label: "Oceania Australia New South Wales",
  },
  { value: "oceania.australia.sydney", label: "Oceania Australia Sydney" },
  { value: "oceania.australia.sydney.1", label: "Oceania Australia Sydney 1" },
  {
    value: "oceania.australia.sydney.com",
    label: "Oceania Australia Sydney Com",
  },
  { value: "oceania.australia.victoria", label: "Oceania Australia Victoria" },
];

export default locations;