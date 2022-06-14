let toptitleDiv =
  '<p class="fort-font text-center text-2xl text-sky-600 max-w-3xl mx-auto my-4">Cleaning Up?</p>';
let titleDiv =
  '<p class="fort-font text-center text-5xl text-black max-w-3xl mx-auto mt-2 mb-6">Main Title</p>';
let bylineDiv =
  '<p class="neue-font text-center text-sm max-w-3xl mx-auto mb-14 leading-relaxed">Melissa Checker, Juan Francisco Saldarriaga, Glen Johnson, Alex Mendell, Scott Larson, and Mariana Mogilevich • March 22, 2022</p>';

let descriptionDiv =
  '<p class="neue-font text-left text-lg max-w-3xl mx-auto mt-6 leading-relaxed">Earlier in our series <a class="underline underline-offset-8" href="https://urbanomnibus.net/series/cleaning-up/" target="_blank" rel="noopener noreferrer">Cleaning Up?</a>, Scott Frickel wrote of a vast and largely unidentified landscape of hidden hazards across American cities. Centuries worth of industrial and chemical activities have led to the accumulation and spread of toxins across metropolitan areas, and New York City is no exception. While a panoply of state and federal programs are charged with investigating and remediating sites that meet a certain threshold of risk to human health, the city is replete with smaller sites &mdash; known as brownfields &mdash; that might not qualify for higher level cleanup, but that are contaminated nonetheless. Abandoned gas stations, old factories, ETC are all considered brownfields.</p>' +
  '<p class="neue-font text-left text-lg max-w-3xl mx-auto mt-6 leading-relaxed">In 2007, Mayor Michael Bloomberg\'s sweeping sustainability plan, known as PlaNYC 2030, promised to "clean up all contaminated land in New York City." The plan established the nation\'s first municipally-funded brownfield cleanup program. Noting that the high cost of environmental cleanup deterred the redevelopment of these sites (and sometimes the surrounding area), Bloomberg used tax and other incentives to encourage private developers and property owners to clean up and repurpose contaminated properties.</p>' +
  '<p class="neue-font text-left text-lg max-w-3xl mx-auto mt-6 leading-relaxed">Since the city program\'s launch in 2009, it has helped private owners clean up 383 sites. But the program\'s structure means that remediations cluster in areas undergoing major residential redevelopment, so that while toxicity is widely distributed, cleanup is highly concentrated.</p>' +
  '<p class="neue-font text-center text-base max-w-3xl mx-auto mt-6 leading-relaxed">Scroll to continue<br>▼</p>';

let divChapter1 =
  '<div class="p-6"><p class="fort-font text-left text-base">Who cleans up contaminated sites in New York City?</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">The <span class="bg-green-700 px-1 rounded text-white">Federal Superfund Program</span> addresses contamination at sites on the EPA\'s National Priorities List (NPL). Sites qualify to be listed on the NPL based on the degree of contamination they contain and the significance of the risks they pose to human health. The enforcement arm of the Superfund program finds the companies or people responsible for contamination at a site and ensures they either remediate sites themselves, or reimburse the EPA for cleanup work. New York State has a Superfund Program that identifies and characterizes suspected inactive hazardous waste disposal sites and ensures that those sites which pose a significant threat to public health or the environment are properly addressed.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">New York State has a <span class="bg-green-400 px-1 rounded text-white">Superfund Program</span> that identifies and characterizes suspected inactive hazardous waste disposal sites and ensures that those sites which pose a significant threat to public health or the environment are properly addressed.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">For sites that do not pose a level of risk that warrants a federal or state cleanup, the New York State Brownfield Cleanup Program encourages private-sector cleanups of brownfields and promotes their redevelopment as a means to revitalize economically blighted communities. The state program offers tax credits for cleaning up the property, and release of liability following a certification of the cleanup.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">But as of 2017, New York State\'s brownfield programs no longer apply to most sites in New York City.</p>' +
  "</div>";

let divChapter2 =
  '<div class="p-6"><p class="fort-font text-left text-base">What needs cleaning up?</p>' +
  "<p class=\"neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed\">We don't know how many sites across the city are contaminated &mdash; there's no official or comprehensive registry. In PlaNYC's 2007 guesstimate, 7600 acres across the city \"could suffer from contamination.\" But there's not much more clarity today.</p>" +
  "<p class=\"neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed\">The closest we can come to determining the locations of potentially contaminated sites across NYC is through e-designations. These are issued through the City Environmental Quality Review process (CEQR), which comes into play any time the City approves a rezoning action.</p>" +
  "<p class=\"neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed\">The CEQR process assesses the environmental conditions of the properties involved in the rezoning. If the process uncovers any concerns regarding hazardous materials, contamination, high ambient noise levels and/or air emissions that might arise from changes to the property, it receives an e-designation. Because CEQR is tied to rezonings, it is a useful (if incomplete) mechanism for identifying the city\'s contaminated sites. We mapped 7200 lots with <span class=\"bg-orange-500 px-1 rounded text-white\">e-designations</span>.</p>" +
  "</div>";

let divChapter3 =
  '<div class="p-6"><p class="fort-font text-left text-base">Who wants to clean up their brownfields?</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">Rezonings encompass a wide range of land use changes, from expanding or subdividing a single structure, to creating new historic preservation districts, to limiting or increasing the density of residential neighborhoods.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">Under Mayor Bloomberg, large swaths of Williamsburg/Greenpoint, Long Island City, parts of West Harlem, Dumbo, downtown Brooklyn, and West Chelsea were rezoned for residential and commercial uses and/or upzoned for taller buildings and greater density. More recently,under  the de Blasio administration, the City Council approved upzonings in East New York, Downtown Far Rockaway, East Harlem, Jerome Avenue, Inwood, and Gowanus.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">We mapped 62 <span class="border border-slate-800 px-1 rounded">upzonings</span> that took effect between 2003 and 2019. These involve changes in land use &mdash; from manufacturing to residential or commercial &mdash; and density &mdash; through the lifting of height restrictions and increases in floor area ratios. The Bloomberg and de Blasio administrations used these changes as a major motor for both market-rate and affordable (privately-owned, subsidized) housing development. These rezonings not only suggest where we will find e-designations, but they also indicate where we find new cleanups.</p>' +
  "</div>";

let divChapter4 =
  '<div class="p-6"><p class="fort-font text-left text-base">Where does cleanup happen?</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">New York City\'s <span class="bg-teal-600 text-white px-1 rounded">Voluntary Cleanup Program (VCP)</span>, the mainstay of its larger brownfield program, encourages the redevelopment of e-designated sites. Developers participating in VCP benefit from a streamlined process. Bypassing lengthy City Council or Community Board approval processes, participants only require project approval from the NYC Office of Environmental Remediation (OER). Site owners take advantage of OER assistance with environmental investigation, remediation and certification, and can also deduct cleanup costs from their federal taxes. Once OER certifies a project as complete, it issues a certificate protecting property owners (and their lenders) from future liability.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">We identified 383 sites across the city that registered with the VCP program and that received a certificate of completion between 2009 and 2019. Our map shows how the locations of these VCP sites correspond with <span class="border border-slate-800 px-1 rounded">upzonings</span> approved during the same period.</p>' +
  "</div>";

let divChapter5 =
  '<div class="p-6"><p class="fort-font text-left text-base">Close Up: Greenpoint</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">During New York City\'s industrial heyday, from the mid 1800s until the mid 20th century, the Greenpoint/Williamsburg waterfront in Brooklyn was dominated by oil refineries, tanneries, canning and copper manufacturing plants. At one time, the shores of the Newtown Creek (which borders northeastern Greenpoint) housed 50 petroleum refineries. Over decades, these leaked as much as 30 million gallons of oil into the Creek and in the soil underneath local businesses and residences. Raw sewage, garbage and all kinds of toxic chemicals were also regularly dumped into the Creek, subject to its own federal cleanup.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">In 2005, the City Council agreed to rezone 184 blocks of Greenpoint and neighboring Williamsburg. Concentrating on areas on or near the waterfront that were zoned for heavy manufacturing uses, the rezoning changed predominant uses to residential and commercial, and it lifted height and density restrictions. In an effort to retain some manufacturing jobs, the rezoning also established several mixed-use zones, meant to combine residential and light industrial uses.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed"><span class="bg-orange-500 px-1 rounded text-white">E-Designated sites</span></p>' +
  "</div>";

let divChapter6 =
  '<div class="p-6"><p class="fort-font text-left text-base">Greenpoint VCP Sites</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">In Greenpoint, we found approximately 193 <span class="bg-orange-500 px-1 rounded text-white">E-designated sites</span>, of which 52 have enrolled in the <span class="bg-teal-600 text-white px-1 rounded">Voluntary Cleanup Program</span>. 36 cleanups have reached completion: all of these sites were repurposed as residential buildings, some with mixed residential and commercial uses. Two of these include inclusionary, or affordable, housing units, while the rest are market rate.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Here are some demographic comparisons between <span class="bg-sky-500 px-1 rounded text-white">Greenpoint</span> and <span class="bg-slate-300 px-1 rounded">New York City</span> in the last twenty years:</p>' +
  '<div class="grid gap-4 lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-1 md:grid-rows-4 pt-4"><img class="pt-4" src="./images/youngGreenpoint.png"><img class="pt-4" src="./images/collegeGreenpoint.png">' +
  '<img class="pt-4" src="./images/rentGreenpoint.png"><img class="pt-4" src="./images/mfiGreenpoint.png"></div>' +
  "</div>";

let divChapter7a =
  '<div class="p-6"><p class="fort-font text-left text-base">Close Up: Port Richmond</p>' +
  "<p class=\"neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed\">Port Richmond is one of New York City\'s oldest industrialized neighborhoods. In 1922, Port Richmond contained 175 industrial plants employing approximately 35,000 workers. New migrants flocked to the area in search of factory jobs, making it Staten Island\'s densest, and most ethnically diverse district. In addition to the New York Container Terminal, New York City\'s busiest port, hundreds of industrial businesses have operated along the waterfront.</p>" +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">Throughout the 1950s, 60s and 70s, globalization and automation caused many of the factories to downsize or close. The decline of industrial businesses wreaked havoc on the entire area &mdash; restaurants, repair shops, and other associated businesses all closed down, laying off thousands of local workers.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">Over time, municipal services replaced some of Port Richmond\'s empty factories and the waterfront continues to be an active location for heavy industrial uses. Today, it houses a wastewater treatment plant, two private waste transfer stations, and a number of ship repair yards, auto body shops, and salvage yards. In addition, it contained several transit depots for MTA buses, Access-a-Ride vehicles, and DEP garbage trucks.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed"><span class="bg-orange-500 px-1 rounded text-white">E-Designated sites</span></p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-1 leading-relaxed"><span class="bg-teal-600 text-white px-1 rounded">Voluntary Cleanup Program</span></p>' +
  "</div>";

let divChapter7b =
  '<div class="p-6"><p class="neue-font text-left text-base max-w-3xl mx-auto leading-relaxed">A recent NYC Department of City Planning study found approximately <span class="bg-green-400 px-1 rounded text-white">41 potential brownfield sites</span> in Port Richmond. Approximately ten sites have been designated as part of the federal or state Superfund programs. About half of those have been, or will soon be, remediated.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">Over the last ten years, urban planning agencies have generated at least a dozen land use studies for redeveloping Port Richmond; however, since 2003, there have only been two significant rezonings in the area.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">To date, there is only one <span class="bg-teal-600 text-white px-1 rounded">Voluntary Cleanup Program site</span> in Port Richmond.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Here are some demographic comparisons between <span class="bg-sky-500 px-1 rounded text-white">Port Richmond</span> and <span class="bg-slate-300 px-1 rounded">New York City</span> over the last twenty years:</p>' +
  '<div class="grid gap-4 lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-1 md:grid-rows-4 pt-4"><img class="pt-4" src="./images/youngPortRichmond.png"><img class="pt-4" src="./images/collegePortRichmond.png">' +
  '<img class="pt-4" src="./images/rentPortRichmond.png"><img class="pt-4" src="./images/mfiPortRichmond.png"></div>' +
  "</div>";

let divChapter8 =
  '<div class="p-6"><p class="fort-font text-left text-base">Gentrification and VCP Sites</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Along with Williamsburg, West Chelsea, and Long Island City, Greenpoint contains multiple VCP sites, and it scores high on our gentrification index.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Like other neighborhoods in southeast Queens, parts of the South Bronx, and Southwest Brooklyn, Port Richmond is not lacking for contaminated sites that abut residential areas. But, also like those other neighborhoods, it scores low on our gentrification index.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">There is very little incentive for private developers to invest in areas where real estate speculation is not underway. In those neighborhoods where developers are less likely to return a profit, this mechanism for cleaning up contaminated properties does not really work. So, cleanups are unevenly distributed across the city, as shown on the map.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Thus, it is left out of the VCP program, leaving few mechanisms for cleaning up or repurposing individual sites that do not qualify for state or federal cleanup programs.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Here is how <span class="bg-sky-400 px-1 rounded text-white">Port Richmond</span> compares to <span class="bg-emerald-400 px-1 rounded text-white">Greenpoint</span> and <span class="bg-slate-300 px-1 rounded">New York City</span> as a whole on this gentrification scale:</p>' +
  '<img class="pt-4" src="./images/gentrificationComparison.png"></p>' +
  "</div>";

let divChapter9 =
  '<div class="p-6"><p class="neue-font text-left leading-relaxed text-base mt-1">The whole point of the program is to provide a tool to facilitate private development on contaminated sites. Its very premise, then, favors areas where private developers can maximize the returns on their investments - i.e. gentrifying areas.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">The problem is that low-income, non-gentrifying areas also have plenty of contaminated properties which might threaten public health and/or present an eyesore or obstacle to further development. However, the city-backed incentives do not work well in these areas because the profit potential is limited.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">And here is how <span class="bg-rose-500 text-white px-1 rounded">gentrification</span> overlaps with the <span class="bg-teal-600 text-white px-1 rounded">Voluntary Cleanup Program</span> sites:</p>' +
  "</div>";

let footerDiv = 
  '<div class="p-10"><p class="fort-font text-left text-base max-w-3xl mx-auto">Notes</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">The index of gentrification is based on a composite score that increases with increasing relative change of key variables (median family income, median rent and proportions of non-Hispanic white, 20-34-year-olds and adults with a 4-year college degree) computed from the years 2000 to 2019 for NYC census tracts that are spatially normalized to the year 2010. These community-level input variables were chosen to represent the nuanced and processual nature of the socioeconomic and demographic shifts associated with gentrification.</p>' +
  '<div class="p-10"><p class="fort-font text-left text-base max-w-3xl mx-auto">Sources</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed"><ul class="list-disc max-w-3xl mx-auto pl-4"><li>New York State</li>' +
  '<li>Superfund Program</li>' +
  '</ul></p>' +
  '<div class="p-10"><p class="fort-font text-left text-base max-w-3xl mx-auto">References</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">Johnson GD, Checker M, Larson S and Kodali H. 2022. A small area index of gentrification, applied to New York City. International Journal of Geographical Information Science. 36(1): 137-157.</p>' +
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
