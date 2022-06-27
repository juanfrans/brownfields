let toptitleDiv =
  '<p class="fort-font text-center text-2xl text-sky-600 max-w-3xl mx-auto my-4">Cleaning Up?</p>';
let titleDiv =
  '<p class="fort-font text-center text-5xl text-black max-w-3xl mx-auto mt-2 mb-6">Main Title</p>';
let bylineDiv =
  '<p class="neue-font text-center text-sm max-w-3xl mx-auto mb-14 leading-relaxed text-gray-600">Melissa Checker, Juan Francisco Saldarriaga, Glen Johnson, Alex Mendell, Scott Larson, and Mariana Mogilevich • March 22, 2022</p>';

let descriptionDiv =
  '<p class="neue-font text-left text-lg max-w-3xl mx-auto mt-6 leading-relaxed text-gray-800">Earlier in our series Cleaning Up?, we surveyed the a <a class="underline underline-offset-8" href="https://urbanomnibus.net/2021/07/hidden-maladies-and-misplaced-remedies/" target="_blank" rel="noopener noreferrer">vast and largely unidentified landscape of hidden hazards across American cities</a>. Centuries worth of industrial and chemical activities have led to the accumulation and spread of toxins across metropolitan areas, and New York City is no exception. While a panoply of state and federal programs are charged with investigating and remediating sites that meet a certain threshold of risk to human health, the city is replete with smaller sites that might not qualify for higher level cleanup, but that are contaminated nonetheless. Abandoned gas stations, old factories, landfills, former dry cleaners &mdash; all contain remnants of toxic chemicals and can be considered brownfields.</p>' +
  '<p class="neue-font text-left text-lg max-w-3xl mx-auto mt-6 leading-relaxed text-gray-800">In 2007, NYC Mayor Michael Bloomberg\'s sweeping sustainability plan, known as  PlaNYC 2030, promised to "clean up all contaminated land in New York City" and launched the nation\'s first municipally-funded brownfield cleanup program. Noting that federal and state programs were insufficient to spur the cleanup and redevelopment of the city\'s vast number of brownfields, Bloomberg offered tax breaks, and other perks to private entities willing to clean up and repurpose these problematic properties.</p>' +
  '<p class="neue-font text-left text-lg max-w-3xl mx-auto mt-6 leading-relaxed text-gray-800">In its first decade, NYC\'s Voluntary Cleanup Program supported the remediation of almost 400 contaminated properties. But the program\'s targeting of the private sector means that remediation projects cluster in areas undergoing major residential redevelopment, so that while toxicity is widely distributed, cleanup is highly concentrated.</p>' +
  '<p class="neue-font text-center text-base max-w-3xl mx-auto mt-6 leading-relaxed text-gray-800">Scroll to continue<br>▼</p>';

let divChapter1 =
  '<div class="text-gray-800 p-6"><p class="fort-font text-left text-base">Who cleans up contaminated sites in New York City?</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">Hazardous waste sites in NYC can be remediated through a variety of publicly-funded programs:</p>' + 
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">The <a class="bg-lime-900 px-1 rounded text-white underline underline-offset-2" href="https://www.epa.gov/superfund" target="_blank" rel="noopener noreferrer">Federal Superfund Program</a> addresses extensive contamination that presents significant hazards to human health. The enforcement arm of the Superfund program works to hold companies or people responsible for contamination and ensure they either remediate sites themselves, or reimburse the EPA for cleanup work.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">New York State has its own <a class="underline underline-offset-2 bg-lime-600 px-1 rounded text-white" href="https://www.dec.ny.gov/chemical/8439.html" target="_blank" rel="noopener noreferrer">Superfund Program</a> that investigates inactive sites suspected of containing hazardous waste. Those found to pose a significant threat to public health or the environment are placed on a priority remediation list. When possible, the state identifies responsible parties and requires them to pay for, or reimburse, cleanup costs.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">Sites that are ineligible for Superfund or other remediation programs and are located in under-developed neighborhoods can apply to the <a <a class="underline underline-offset-2 bg-lime-400 px-1 rounded" href="https://www.dec.ny.gov/chemical/8450.html" target="_blank" rel="noopener noreferrer">New York State Brownfield Cleanup Program</a>. If accepted, property owners and developers receive tax credits and other benefits for remediating these properties. Projects located in NYC must meet additional <a class="underline underline-offset-4" href="https://www.bhlawpllc.com/alert/brownfield-cleanup-program-tax-credits-extended-for-ten-years/" target="_blank" rel="noopener noreferrer">criteria</a> involving neighborhood demographics and the site\'s relative value as well as its current and proposed uses.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed"><a class="underline underline-offset-4" href="https://www1.nyc.gov/site/oer/remediation/voluntary-cleanup.page" target="_blank" rel="noopener noreferrer">NYC\'s Voluntary Cleanup Program (VCP)</a> was designed to expand the scope and reach of brownfield redevelopment and to compensate for the state\'s notoriously long and laborious application and certification process.</p>' +
  "</div>";

let divChapter2 =
  '<div class="text-gray-800 p-6"><p class="fort-font text-left text-base">What needs cleaning up?</p>' +
  "<p class=\"neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed\">Much of New York City sits on historic fill, often containing various forms of waste. By some estimates, contamination is pervasive, and almost the entire city could be considered a brownfield. PlaNYC 2030 claimed that 7,600 acres across the city \"could suffer from contamination.\" To date, however, there is no official, comprehensive registry of the city\'s hazardous sites. Instead, researchers and planners generally rely on environmental requirements, or “e-designations,” to approximate the location of such sites.</p>" +
  "<p class=\"neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed\">E-designations only cover properties that have been rezoned since 1977. Beginning that year, all new zoning actions &mdash; from expanding or subdividing a single structure, to creating new historic preservation districts, to limiting or increasing the density of residential neighborhoods &mdash; triggered a process known as the City Environmental Quality Review (CEQR). If the CEQR flags a property as having potential contamination and/or determines that construction on it will cause  high ambient noise levels, and/or air emissions, that property receives an e-designation, requiring further environmental investigation, and where appropriate, remediation or mitigation.</p>" +
  "<p class=\"neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed\">Here, we mapped 7,200 lots with <span class=\"bg-orange-500 px-1 rounded text-white\">e-designations</span> across the city.</p>" +
  "</div>";

let divChapter3 =
  '<div class="text-gray-800 p-6"><p class="fort-font text-left text-base">From Rezoning to Redevelopment</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">Mayor Michael Bloomberg is known for rezoning one-third of New York City. These changes included downzoning residential neighborhoods like Park Slope and Bayside in order to preserve low housing density. More famously, Bloomberg \"upzoned\" formerly industrial areas, shifting land uses from manufacturing to residential and commercial and lifting building height and density restrictions.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">Upzonings transformed neighborhoods like Williamsburg/Greenpoint, Long Island City, parts of West Harlem, Dumbo, downtown Brooklyn, and West Chelsea. Under Mayor Bill de Blasio, the trend continued with upzonings in East New York, Downtown Far Rockaway, East Harlem, Jerome Avenue, Inwood, and Gowanus. Upzonings provide a motor for both market-rate and affordable (privately-owned, subsidized) housing development.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">We mapped 62 <span class="border border-slate-800 px-1 rounded">upzonings</span> that took effect between 2003 and 2019.</p>' +
  "</div>";

let divChapter4 =
  '<div class="text-gray-800 p-6"><p class="fort-font text-left text-base">Where does cleanup happen?</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">In formerly industrial neighborhoods, upzonings lead to an especially large number of e-designated properties that require environmental remediation before they can be redeveloped. To ensure that remediation costs do not hinder redevelopment, PlaNYC 2030 created its own set of brownfield incentives, known as the Voluntary Cleanup Program (VCP). In addition to a streamlined process that bypasses lengthy City Council or Community Board approvals,&#42; the VCP allows owners to deduct cleanup costs from their federal taxes and offers assistance with environmental investigation, remediation and certification. Once a VCP project completes final certification, its owners (and their lenders) receive liability protection, guaranteeing that neither the state nor the city will require further investigation or remedial work at the site.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">We identified <span class="bg-teal-600 text-white px-1 rounded">383 VCP sites</span> that were completed between 2009 and 2019. Although they can be found throughout the five boroughs, the vast majority are located in areas that were <span class="border border-slate-800 px-1 rounded">upzoned</span> during the same period.</p>' +
  '<p class="neue-font text-left text-sm italic max-w-3xl mx-auto mt-6 leading-relaxed">&#42;The VCP does require project approval from the NYC Office of Environmental Remediation (OER).</p>' +
  "</div>";

let divChapter5 =
  '<div class="text-gray-800 p-6"><p class="fort-font text-left text-base">Close Up: Greenpoint</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">During New York City\'s industrial heyday, from the mid 1800s until the mid 20th century, the Greenpoint/Williamsburg waterfront in Brooklyn was dominated by oil refineries, tanneries, canning and copper manufacturing plants. At one time, the shores of the Newtown Creek (which borders northeastern Greenpoint) housed 50 petroleum refineries. Over decades, these leaked as much as 30 million gallons of oil into the Creek and in the soil underneath local businesses and residences. Raw sewage, garbage and all kinds of toxic chemicals were also regularly dumped into the Creek, subject to its own federal cleanup.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">In 2005, the City Council agreed to rezone 184 blocks of Greenpoint and neighboring Williamsburg. Concentrating on areas on or near the waterfront that were zoned for heavy manufacturing uses, the rezoning changed predominant uses to residential and commercial, and it lifted height and density restrictions. In an effort to retain some manufacturing jobs, the rezoning also established several mixed-use zones, meant to combine residential and light industrial uses.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed"><span class="bg-orange-500 px-1 rounded text-white">E-Designated sites</span></p>' +
  "</div>";

let divChapter6 =
  '<div class="text-gray-800 p-6"><p class="fort-font text-left text-base">Greenpoint VCP Sites</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">In Greenpoint, we found approximately 193 <span class="bg-orange-500 px-1 rounded text-white">E-designated sites</span>, of which 52 have enrolled in the <span class="bg-teal-600 text-white px-1 rounded">Voluntary Cleanup Program</span>. 36 cleanups have reached completion: all of these sites were repurposed as residential buildings, some with mixed residential and commercial uses. Two of these include inclusionary, or affordable, housing units, while the rest are market rate.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Here are some demographic comparisons between <span class="bg-sky-500 px-1 rounded text-white">Greenpoint</span> and <span class="bg-slate-300 px-1 rounded">New York City</span> in the last twenty years:</p>' +
  '<div class="text-gray-800 grid gap-4 lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-1 md:grid-rows-4 pt-4"><img class="pt-4" src="./images/youngGreenpoint.png"><img class="pt-4" src="./images/collegeGreenpoint.png">' +
  '<img class="pt-4" src="./images/rentGreenpoint.png"><img class="pt-4" src="./images/mfiGreenpoint.png"></div>' +
  "</div>";

let divChapter7a =
  '<div class="text-gray-800 p-6"><p class="fort-font text-left text-base">Close Up: Port Richmond</p>' +
  "<p class=\"neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed\">Port Richmond is one of New York City\'s oldest industrialized neighborhoods. In 1922, Port Richmond contained 175 industrial plants employing approximately 35,000 workers. New migrants flocked to the area in search of factory jobs, making it Staten Island\'s densest, and most ethnically diverse district. In addition to the New York Container Terminal, New York City\'s busiest port, hundreds of industrial businesses have operated along the waterfront.</p>" +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">Throughout the 1950s, 60s and 70s, globalization and automation caused many of the factories to downsize or close. The decline of industrial businesses wreaked havoc on the entire area &mdash; restaurants, repair shops, and other associated businesses all closed down, laying off thousands of local workers.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">Over time, municipal services replaced some of Port Richmond\'s empty factories and the waterfront continues to be an active location for heavy industrial uses. Today, it houses a wastewater treatment plant, two private waste transfer stations, and a number of ship repair yards, auto body shops, and salvage yards. In addition, it contained several transit depots for MTA buses, Access-a-Ride vehicles, and DEP garbage trucks.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed"><span class="bg-orange-500 px-1 rounded text-white">E-Designated sites</span></p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-1 leading-relaxed"><span class="bg-teal-600 text-white px-1 rounded">Voluntary Cleanup Program</span></p>' +
  "</div>";

let divChapter7b =
  '<div class="text-gray-800 p-6"><p class="neue-font text-left text-base max-w-3xl mx-auto leading-relaxed">A recent NYC Department of City Planning study found approximately <span class="bg-green-400 px-1 rounded text-white">41 potential brownfield sites</span> in Port Richmond. Approximately ten sites have been designated as part of the federal or state Superfund programs. About half of those have been, or will soon be, remediated.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">Over the last ten years, urban planning agencies have generated at least a dozen land use studies for redeveloping Port Richmond; however, since 2003, there have only been two significant rezonings in the area.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">To date, there is only one <span class="bg-teal-600 text-white px-1 rounded">Voluntary Cleanup Program site</span> in Port Richmond.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Here are some demographic comparisons between <span class="bg-sky-500 px-1 rounded text-white">Port Richmond</span> and <span class="bg-slate-300 px-1 rounded">New York City</span> over the last twenty years:</p>' +
  '<div class="text-gray-800 grid gap-4 lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-1 md:grid-rows-4 pt-4"><img class="pt-4" src="./images/youngPortRichmond.png"><img class="pt-4" src="./images/collegePortRichmond.png">' +
  '<img class="pt-4" src="./images/rentPortRichmond.png"><img class="pt-4" src="./images/mfiPortRichmond.png"></div>' +
  "</div>";

let divChapter8 =
  '<div class="text-gray-800 p-6"><p class="fort-font text-left text-base">Gentrification and VCP Sites</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Along with Williamsburg, West Chelsea, and Long Island City, Greenpoint contains multiple VCP sites, and it scores high on our gentrification index.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Like other neighborhoods in southeast Queens, parts of the South Bronx, and Southwest Brooklyn, Port Richmond is not lacking for contaminated sites that abut residential areas. But, also like those other neighborhoods, it scores low on our gentrification index.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">There is very little incentive for private developers to invest in areas where real estate speculation is not underway. In those neighborhoods where developers are less likely to return a profit, this mechanism for cleaning up contaminated properties does not really work. So, cleanups are unevenly distributed across the city, as shown on the map.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Thus, it is left out of the VCP program, leaving few mechanisms for cleaning up or repurposing individual sites that do not qualify for state or federal cleanup programs.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Here is how <span class="bg-sky-400 px-1 rounded text-white">Port Richmond</span> compares to <span class="bg-emerald-400 px-1 rounded text-white">Greenpoint</span> and <span class="bg-slate-300 px-1 rounded">New York City</span> as a whole on this gentrification scale:</p>' +
  '<img class="pt-4" src="./images/gentrificationComparison.png"></p>' +
  "</div>";

let divChapter9 =
  '<div class="text-gray-800 p-6"><p class="neue-font text-left leading-relaxed text-base mt-1">The whole point of the program is to provide a tool to facilitate private development on contaminated sites. Its very premise, then, favors areas where private developers can maximize the returns on their investments - i.e. gentrifying areas.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">The problem is that low-income, non-gentrifying areas also have plenty of contaminated properties which might threaten public health and/or present an eyesore or obstacle to further development. However, the city-backed incentives do not work well in these areas because the profit potential is limited.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">And here is how <span class="bg-rose-500 text-white px-1 rounded">gentrification</span> overlaps with the <span class="bg-teal-600 text-white px-1 rounded">Voluntary Cleanup Program</span> sites:</p>' +
  "</div>";

let footerDiv = 
  '<div class="text-gray-800 p-10"><p class="fort-font text-left text-lg max-w-3xl mx-auto">Notes</p>' +
  '<p class="neue-font text-left text-lg max-w-3xl mx-auto mt-6 leading-relaxed">The index of gentrification is based on a composite score that increases with increasing relative change of key variables (median family income, median rent and proportions of non-Hispanic white, 20-34-year-olds and adults with a 4-year college degree) computed from the years 2000 to 2019 for NYC census tracts that are spatially normalized to the year 2010. These community-level input variables were chosen to represent the nuanced and processual nature of the socioeconomic and demographic shifts associated with gentrification.</p>' +
  '<div class="p-10"><p class="fort-font text-left text-lg max-w-3xl mx-auto">Data Sources</p>' +
  '<p class="neue-font text-left text-lg max-w-3xl mx-auto mt-6 leading-relaxed"><ul class="list-disc max-w-3xl mx-auto pl-4">' +
  '<li><a class="underline underline-offset-4" href="https://www1.nyc.gov/site/planning/data-maps/open-data/dwn-edesignations.page" target="_blank" rel="noopener noreferrer">E Designated Sites</a>, New York City Department of City Planning</li>' +
  '<li class="pt-2"><a class="underline underline-offset-4" href="https://data.cityofnewyork.us/Environment/OER-Cleanup-Sites/3279-pp7v" target="_blank" rel="noopener noreferrer">OER Cleanup Sites</a>, Mayor\'s Office of Environmental Remediation (OER)</li>' +
  '<li class="pt-2"><a class="underline underline-offset-4" href="https://data.census.gov/cedsci/" target="_blank" rel="noopener noreferrer">American Community Survey 2019, 5-Year Estimates</a>, United States Census Bureau. Tables B01001 (sex by age), B01003 (total population), B02001 (race), B15001 (sex by age by educational attainment), B19013 (median household income), B25064 (median gross rent)</li>' +
  '<li class="pt-2"><a class="underline underline-offset-4" href="https://www1.nyc.gov/site/planning/data-maps/open-data/districts-download-metadata.page" target="_blank" rel="noopener noreferrer">New York City Borough Boundaries</a>, New York City Department of City Planning</li>' +
  '<li class="pt-2"><a class="underline underline-offset-4" href="https://www1.nyc.gov/site/planning/data-maps/open-data/census-download-metadata.page" target="_blank" rel="noopener noreferrer">New York City Neighborhood Tabulation Areas</a>, New York City Department of City Planning</li>' +
  '<li class="pt-2"><a class="underline underline-offset-4" href="https://docs.dos.ny.gov/opd/boa/PortRichmondBOA.pdf" target="_blank" rel="noopener noreferrer">Port Richmond Contaminated Sites</a>, Northfield Community Local Development Corporation and the New York State Department of State.</li>' +
  '<li class="pt-2"><a class="underline underline-offset-4" href="https://data.ny.gov/Energy-Environment/Environmental-Remediation-Sites/c6ci-rzpg" target="_blank" rel="noopener noreferrer">New York State Environmental Remediation Sites</a>, New York State Department of Environmental Conservation</li>' +
  '<li class="pt-2">Federal Superfund sites</li>' +
  '<li class="pt-2">Upzonings</li>' +
  '</ul></p>' +
  '<div class="p-10"><p class="fort-font text-left text-lg max-w-3xl mx-auto">References</p>' +
  '<p class="neue-font text-left text-lg max-w-3xl mx-auto mt-6 leading-relaxed">Johnson GD, Checker M, Larson S and Kodali H. 2022. <a class="underline underline-offset-4" href="https://www.tandfonline.com/doi/full/10.1080/13658816.2021.1931873" target="_blank" rel="noopener noreferrer">A small area index of gentrification, applied to New York City</a>. <span class="italic">International Journal of Geographical Information Science</span>. 36(1): 137-157.</p></div>' +
  '<div class="p-10"><p class="fort-font text-left text-lg max-w-3xl mx-auto">Share and Print buttons</p></div>' +
  '<div class="p-10"><p class="fort-font text-left text-lg max-w-3xl mx-auto">Urban Omnibus logo</p></div>' +
  '<div class="p-10"><p class="neue-font text-left text-lg max-w-3xl mx-auto mt-1 leading-relaxed"><span class="font-semibold">Melissa Checker</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur blanditiis, fuga suscipit placeat ratione ut officia incidunt quis eligendi ipsa ad dignissimos adipisci saepe voluptatem labore voluptas ab, nemo iure.</p>' +
  '<p class="neue-font text-left text-lg max-w-3xl mx-auto mt-6 leading-relaxed"><span class="font-semibold">Juan Francisco Saldarriaga</span> is the Senior Data and Design researcher at the <a class="underline underline-offset-4" href="https://brown.columbia.edu/" target="_blank" rel="noopener noreferrer">Brown Institute for Media Innovation</a> at Columbia Univeristy\'s School of Journalism. He works at the intersection of data, visualization, mapping and the built environment.</p>' +
  '<p class="neue-font text-left text-lg max-w-3xl mx-auto mt-6 leading-relaxed"><span class="font-semibold">Mariana Mogilevich</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur blanditiis, fuga suscipit placeat ratione ut officia incidunt quis eligendi ipsa ad dignissimos adipisci saepe voluptatem labore voluptas ab, nemo iure.</p>' +
  '<p class="neue-font text-left text-lg max-w-3xl mx-auto mt-6 leading-relaxed"><span class="font-semibold">Glen Johnson</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur blanditiis, fuga suscipit placeat ratione ut officia incidunt quis eligendi ipsa ad dignissimos adipisci saepe voluptatem labore voluptas ab, nemo iure.</p>' +
  '<p class="neue-font text-left text-lg max-w-3xl mx-auto mt-6 leading-relaxed"><span class="font-semibold">Alex Mendell</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur blanditiis, fuga suscipit placeat ratione ut officia incidunt quis eligendi ipsa ad dignissimos adipisci saepe voluptatem labore voluptas ab, nemo iure.</p>' +
  '<p class="neue-font text-left text-lg max-w-3xl mx-auto mt-6 leading-relaxed"><span class="font-semibold">Scott Larson</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur blanditiis, fuga suscipit placeat ratione ut officia incidunt quis eligendi ipsa ad dignissimos adipisci saepe voluptatem labore voluptas ab, nemo iure.</p>' +
  '</div>' +
  "</div>";


var config = {
  style: "mapbox://styles/jfs2118/cl1z1wypf002i14pcm2b34w8y",
  accessToken:
    "pk.eyJ1IjoiamZzMjExOCIsImEiOiJlMUQzd2YwIn0.WLb3PYDt2z-XttOLFcQlVQ",
  showMarkers: false,
  markerColor: "#3FB1CE",
  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: false,
  theme: "light",
  use3dTerrain: false,
  toptitle: toptitleDiv,
  title: titleDiv,
  // subtitle: '',
  byline: bylineDiv,
  description: descriptionDiv,
  footer: footerDiv,
  chapters: [
    {
      id: "stateFederalPrograms",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter1,
      location: {
        center: [-73.999, 40.7],
        zoom: 10,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "nyc",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "eHeatmap",
          opacity: 0.5,
          duration: 300,
        },
        {
          layer: "eDesignations",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "gentrificationIndex",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "upzonings-line",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "cleanupSites",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "cleanupSitesBIN",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "eDesignationsBBL",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "stateCleanup",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "selectedNtas",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "portRichmondSites",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "superfundSites",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "e-designations",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter2,
      location: {
        center: [-73.999, 40.7],
        zoom: 10,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "nyc",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "eHeatmap",
          opacity: 0.5,
          duration: 300,
        },
        {
          layer: "eDesignations",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "gentrificationIndex",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "upzonings-line",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "cleanupSites",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "cleanupSitesBIN",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "eDesignationsBBL",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "stateCleanup",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "selectedNtas",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "portRichmondSites",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "superfundSites",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "upzonings",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [-73.999, 40.7],
        zoom: 10,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "nyc",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "eHeatmap",
          opacity: 0.5,
          duration: 300,
        },
        {
          layer: "eDesignations",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "gentrificationIndex",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "upzonings-line",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "cleanupSites",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "cleanupSitesBIN",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "eDesignationsBBL",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "stateCleanup",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "selectedNtas",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "portRichmondSites",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "superfundSites",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "vcpProgram",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4,
      location: {
        center: [-73.999, 40.7],
        zoom: 10,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "nyc",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "eHeatmap",
          opacity: 0.5,
          duration: 300,
        },
        {
          layer: "eDesignations",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "gentrificationIndex",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "upzonings-line",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "cleanupSites",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "cleanupSitesBIN",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "eDesignationsBBL",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "stateCleanup",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "selectedNtas",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "portRichmondSites",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "superfundSites",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "greenpoint-eDesignations",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5,
      location: {
        center: [-73.96, 40.723],
        zoom: 13.5,
        zoomSmall: 13,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "nyc",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "eHeatmap",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "eDesignations",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "gentrificationIndex",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "upzonings-line",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "cleanupSites",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "cleanupSitesBIN",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "eDesignationsBBL",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "stateCleanup",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "selectedNtas",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "portRichmondSites",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "superfundSites",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "greenpoint-oerSites",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter6,
      location: {
        center: [-73.96, 40.723],
        zoom: 13.5,
        zoomSmall: 13,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "nyc",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "eHeatmap",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "eDesignations",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "gentrificationIndex",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "upzonings-line",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "cleanupSites",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "cleanupSitesBIN",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "eDesignationsBBL",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "stateCleanup",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "selectedNtas",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "portRichmondSites",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "superfundSites",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "portRichmond-oerSites1",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter7a,
      location: {
        center: [-74.1425, 40.63],
        zoom: 13.5,
        zoomSmall: 13,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "nyc",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "eHeatmap",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "eDesignations",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "gentrificationIndex",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "upzonings-line",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "cleanupSites",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "cleanupSitesBIN",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "eDesignationsBBL",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "stateCleanup",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "selectedNtas",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "portRichmondSites",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "superfundSites",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "portRichmond-oerSites2",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter7b,
      location: {
        center: [-74.1425, 40.63],
        zoom: 13.5,
        zoomSmall: 13,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "nyc",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "eHeatmap",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "eDesignations",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "gentrificationIndex",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "upzonings-line",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "cleanupSites",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "cleanupSitesBIN",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "eDesignationsBBL",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "stateCleanup",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "selectedNtas",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "portRichmondSites",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "superfundSites",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "gentrificationOverview",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter8,
      location: {
        center: [-74.125, 40.7],
        zoom: 10,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "nyc",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "eHeatmap",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "eDesignations",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "gentrificationIndex",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "upzonings-line",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "cleanupSites",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "cleanupSitesBIN",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "eDesignationsBBL",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "stateCleanup",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "selectedNtas",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "portRichmondSites",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "superfundSites",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "gentrificationAndSites",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter9,
      location: {
        center: [-74.125, 40.7],
        zoom: 10,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "nyc",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "eHeatmap",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "eDesignations",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "gentrificationIndex",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "upzonings-line",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "cleanupSites",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "cleanupSitesBIN",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "eDesignationsBBL",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "stateCleanup",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "selectedNtas",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "portRichmondSites",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "superfundSites",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    // {
    //   id: "cleanupPortRichmond",
    //   alignment: "left",
    //   hidden: false,
    //   title: "",
    //   image: "",
    //   description: "",
    //   chapterDiv: divChapter8,
    //   location: {
    //     center: [-74.1425, 40.63],
    //     zoom: 13.5,
    //     zoomSmall: 13,
    //     pitch: 0,
    //     bearing: 0,
    //   },
    //   mapAnimation: "flyTo",
    //   rotateAnimation: false,
    //   callback: "",
    //   onChapterEnter: [
    //     {
    //       layer: "nyc",
    //       opacity: 1,
    //       duration: 300,
    //     },
    //     {
    //       layer: "eHeatmap",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "eDesignations",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "gentrificationIndex",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "upzonings-line",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "cleanupSites",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "cleanupSitesBIN",
    //       opacity: 1,
    //       duration: 300,
    //     },
    //     {
    //       layer: "eDesignationsBBL",
    //       opacity: 1,
    //       duration: 300,
    //     },
    //     {
    //       layer: "stateCleanup",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //   ],
    //   onChapterExit: [],
    // },
    // {
    //   id: "gentrification",
    //   alignment: "left",
    //   hidden: false,
    //   title: "",
    //   image: "",
    //   description: "",
    //   chapterDiv: divChapter9a,
    //   location: {
    //     center: [-73.999, 40.7],
    //     zoom: 10,
    //     zoomSmall: 9,
    //     pitch: 0,
    //     bearing: 0,
    //   },
    //   mapAnimation: "flyTo",
    //   rotateAnimation: false,
    //   callback: "",
    //   onChapterEnter: [
    //     {
    //       layer: "nyc",
    //       opacity: 1,
    //       duration: 300,
    //     },
    //     {
    //       layer: "eHeatmap",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "eDesignations",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "gentrificationIndex",
    //       opacity: 0.8,
    //       duration: 300,
    //     },
    //     {
    //       layer: "upzonings-line",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "cleanupSites",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "cleanupSitesBIN",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "eDesignationsBBL",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "stateCleanup",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //   ],
    //   onChapterExit: [],
    // },
    // {
    //   id: "gentrificationCleanup",
    //   alignment: "left",
    //   hidden: false,
    //   title: "",
    //   image: "",
    //   description: "",
    //   chapterDiv: divChapter9b,
    //   location: {
    //     center: [-73.999, 40.7],
    //     zoom: 10,
    //     zoomSmall: 9,
    //     pitch: 0,
    //     bearing: 0,
    //   },
    //   mapAnimation: "flyTo",
    //   rotateAnimation: false,
    //   callback: "",
    //   onChapterEnter: [
    //     {
    //       layer: "nyc",
    //       opacity: 1,
    //       duration: 300,
    //     },
    //     {
    //       layer: "eHeatmap",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "eDesignations",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "gentrificationIndex",
    //       opacity: 0.8,
    //       duration: 300,
    //     },
    //     {
    //       layer: "upzonings-line",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "cleanupSites",
    //       opacity: 1,
    //       duration: 300,
    //     },
    //     {
    //       layer: "cleanupSitesBIN",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "eDesignationsBBL",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "stateCleanup",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //   ],
    //   onChapterExit: [],
    // },
    // {
    //   id: "stateCleanupSites",
    //   alignment: "left",
    //   hidden: false,
    //   title: "",
    //   image: "",
    //   description: "",
    //   chapterDiv: divChapter10,
    //   location: {
    //     center: [-73.999, 40.7],
    //     zoom: 10,
    //     zoomSmall: 9,
    //     pitch: 0,
    //     bearing: 0,
    //   },
    //   mapAnimation: "flyTo",
    //   rotateAnimation: false,
    //   callback: "",
    //   onChapterEnter: [
    //     {
    //       layer: "nyc",
    //       opacity: 1,
    //       duration: 300,
    //     },
    //     {
    //       layer: "eHeatmap",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "eDesignations",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "gentrificationIndex",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "upzonings-line",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "cleanupSites",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "cleanupSitesBIN",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "eDesignationsBBL",
    //       opacity: 0,
    //       duration: 300,
    //     },
    //     {
    //       layer: "stateCleanup",
    //       opacity: 1,
    //       duration: 300,
    //     },
    //   ],
    //   onChapterExit: [],
    // },
  ],
};
