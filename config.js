let toptitleDiv =
  '<p class="fort-font text-center text-2xl text-sky-600 max-w-3xl mx-auto my-4"><a class="hover:text-sky-500" href="https://urbanomnibus.net/series/cleaning-up/" target="_blank" rel="noopener noreferrer">Cleaning Up?</a></p>';
let titleDiv =
  '<p class="fort-font text-center text-5xl text-black max-w-3xl mx-auto mt-2 mb-6">Concentrated Cleanup</p>';
let bylineDiv =
  '<p class="neue-font text-center text-sm max-w-3xl mx-auto mb-14 leading-relaxed text-gray-600 sm:px-0 px-3">Melissa Checker, Juan Francisco Saldarriaga, Glen Johnson, Alex Mendell, and Mariana Mogilevich • June 29, 2022</p>';

let introductionDiv =
  '<p class="neue-font text-left text-lg max-w-3xl mx-auto mt-6 leading-relaxed text-gray-800 sm:px-0 px-3">Earlier in our series Cleaning Up?, we surveyed <a class="underline underline-offset-8" href="https://urbanomnibus.net/2021/07/hidden-maladies-and-misplaced-remedies/" target="_blank" rel="noopener noreferrer">the vast and largely unidentified landscape of hidden hazards across American cities</a>. Centuries\' worth of industrial and chemical activities have led to the accumulation and spread of toxins across metropolitan areas, and New York City is no exception. An array of state and federal programs investigate and remediate sites that meet a certain threshold of risk to human health. But the city is replete with smaller contaminated sites that do not qualify for higher-level cleanup. The steep costs of remediation can prevent developers from purchasing and repurposing these properties &mdash; abandoned gas stations, former factories, dry cleaners, and others &mdash; which are known as "brownfields."</p>' +
  '<p class="neue-font text-left text-lg max-w-3xl mx-auto mt-6 leading-relaxed text-gray-800 sm:px-0 px-3">In 2007, Mayor Michael Bloomberg\'s sweeping sustainability plan, known as PlaNYC 2030, promised (among other things) to "clean up all contaminated land in New York City." Noting that existing federal and state-funded brownfield programs were insufficient to spur the cleanup and redevelopment of the city\'s vast number of contaminated properties, Bloomberg launched the nation\'s first municipally-funded brownfield cleanup program. In 2009, New York City began taking applications for its Voluntary Cleanup Program (VCP), offering tax breaks and other perks to qualified, private entities in order to facilitate the clean up and repurposing of these problematic properties.</p>' +
  '<img class="max-w-3xl mx-auto mt-6 w-full sm:px-0 px-3" src="./images/waxmanLICOptimized.jpg">' +
  '<p class="neue-font text-left text-sm max-w-3xl mx-auto mt-2 leading-relaxed text-gray-500 sm:px-0 px-3">Long Island City, 2009. Photo by Mitch Waxman</p>' +
  '<p class="neue-font text-left text-lg max-w-3xl mx-auto mt-6 leading-relaxed text-gray-800 sm:px-0 px-3">In its first decade, the VCP supported the remediation of almost 400 contaminated properties. We mapped these completed VCP sites, along with sites that are potentially contaminated, and demographic shifts over the last two decades. The program\'s targeting of the private sector means that cleanup projects cluster in areas undergoing major residential redevelopment. In other words, while toxicity is widely distributed across the city, cleanup is highly concentrated.</p>' +
  '<p class="neue-font text-center text-base max-w-3xl mx-auto mt-6 leading-relaxed text-gray-800">Scroll to continue<br>▼</p>';

let stateAndFederalProgramsDiv =
  '<div class="text-gray-800 p-6"><p class="fort-font text-left text-base">Who cleans up contaminated sites in New York City?</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">We\'ll look closely here at New York City\'s municipal cleanup program. But first, it\'s important to note that in New York, like the rest of the United States, sites with extensive contamination, pollution, or hazardous waste that present significant risk to human health are remediated through a variety of federal and state programs.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">This map shows sites participating in the <a class="bg-lime-900 px-1 rounded text-white underline underline-offset-2" href="https://www.epa.gov/superfund" target="_blank" rel="noopener noreferrer">Federal Superfund Program</a> and in a number of <span class="bg-lime-600 px-1 rounded text-white">New York State environmental remediation programs</span>.&#42 We include it to provide a sense of the widespread nature of contamination throughout New York City.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">Abandoned or under-used properties that do not qualify for these and other public programs can enlist in a <span class="bg-lime-400 px-1 rounded">Brownfield Cleanup Program</span> (BCP). New York State\'s BCP offers property owners and developers tax credits and other benefits for remediating these properties. Recently, the state BCP has increased its focus on disadvantaged neighborhoods by expanding subprograms like Brownfield Opportunity Areas, which targets under-served areas with multiple brownfields. In addition, considering the intensity of redevelopment here, projects in New York City must meet extra <a class="underline underline-offset-4" href="https://www.bhlawpllc.com/alert/brownfield-cleanup-program-tax-credits-extended-for-ten-years/" target="_blank" rel="noopener noreferrer">criteria</a> related to neighborhood demographics, the site\'s relative value, and its current and proposed uses.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">Designed to expand the scope and reach of brownfield redevelopment, and to streamline the redevelopment process, New York City\'s <a class="underline underline-offset-4" href="https://www1.nyc.gov/site/oer/remediation/voluntary-cleanup.page" target="_blank" rel="noopener noreferrer">Voluntary Cleanup Program (VCP)</a> (VCP) includes more relaxed criteria. According to program requirements, any real property “within the city, the redevelopment or reuse of which may be complicated by the presence or potential presence of” contamination is eligible, with the exception of sites in certain federal and state registries or those subject to enforcement actions.</p>' +
  '<p class="neue-font text-left text-sm italic max-w-3xl mx-auto mt-6 leading-relaxed">&#42; These include: Environmental Restoration, Hazardous Waste Management, Inactive Hazardous Waste Disposal, and NY State Superfund programs. This is not an exhaustive list of existing cleanup programs.</p>' +
  "</div>";

let eDesignationsDiv =
  '<div class="text-gray-800 p-6"><p class="fort-font text-left text-base">What needs cleaning up?</p>' +
  "<p class=\"neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed\">Much of New York City sits on historic fill, often composed of various waste products. By some estimates, almost the entire city could be considered a brownfield. PlaNYC 2030 claimed that 7,600 acres across the city \"could suffer from contamination.\" To date, however, there is no official, comprehensive registry of the city\'s contaminated sites. Instead, researchers and planners generally rely on environmental requirements, or \"e-designations,\" to approximate the location of such sites.</p>" +
  "<p class=\"neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed\">Since 1983, all new zoning actions &mdash; from expanding or subdividing a single structure, to creating new historic preservation districts, to limiting or increasing the density of residential neighborhoods &mdash; require environmental reviews. If the review flags a property as having potential contamination, and/or determines that construction will cause high ambient noise levels and/or air emissions, that property receives an e-designation, or an environmental restrictive declaration. No redevelopment of such a property can occur before there is further environmental investigation and, where appropriate, remediation or mitigation.</p>" +
  "<p class=\"neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed\">This map shows the location of 7,200 city lots with <span class=\"bg-orange-500 px-1 rounded text-white\">e-designations</span>. This is not a complete list of properties that have potential environmental conditions &mdash; only those that were rezoned after 1983.</p>" +
  "</div>";

let upzoningsDiv =
  '<div class="text-gray-800 p-6"><p class="fort-font text-left text-base">From Rezoning to Redevelopment</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">Over the past 20 years, and especially in formerly industrial areas, rezoning and upzoning processes have been an important mechanism for neighborhood change. During the administration of Mayor Michael Bloomberg (2002-2013), experts estimate one third of the city was rezoned. In addition to downzoning residential neighborhoods like Park Slope and Bayside, Bloomberg "upzoned" formerly industrial areas, shifting land uses from manufacturing to residential and commercial, and lifting building height and density restrictions. This paved the way for large-scale redevelopment.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">These upzonings transformed neighborhoods like Williamsburg/Greenpoint, Long Island City, Dumbo, Downtown Brooklyn, West Chelsea, and parts of West Harlem. Under Mayor Bill de Blasio (2014-2021), the trend continued with upzonings in East New York, Downtown Far Rockaway, East Harlem, Jerome Avenue, Inwood, and Gowanus.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">We mapped 62 <span class="border border-slate-800 px-1 rounded">upzonings</span> that took effect between 2003 and 2019.</p>' +
  "</div>";

let vcpProgramDiv =
  '<div class="text-gray-800 p-6"><p class="fort-font text-left text-base">Where does cleanup happen?</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">In formerly industrial neighborhoods, upzonings lead to an especially large number of e-designated properties that require environmental remediation before redevelopment can happen. The Voluntary Cleanup Program was created to ensure that remediation costs do not hinder redevelopment. The VCP allows owners to deduct cleanup costs from their federal taxes and offers assistance with environmental investigation, remediation and certification. Once a VCP property completes final certification, its owners (and their lenders) receive liability protection, guaranteeing that neither the state nor the city will require further investigation or remedial work at the site. In addition, projects are approved by the NYC Office of Environmental Remediation (OER), avoiding the lengthy process of obtaining City Council or Community Board approvals.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">We identified and mapped <span class="bg-teal-600 text-white px-1 rounded">383 VCP sites</span> that were completed between 2009 and 2019. Although they can be found across the five boroughs, the vast majority of sites are located in areas that were <span class="border border-slate-800 px-1 rounded">upzoned</span> during the same period.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">To gain a better understanding of the relationship between the VCP and redevelopment, we now take a close-up look at two neighborhoods: Greenpoint, Brooklyn and Port Richmond, Staten Island. Both are known for their long histories of heavy industrial uses and contamination. In both cases, historic zoning laws also allowed industries and residences to co-exist in close proximity. Only Greenpoint has undergone a major rezoning.</p>' +
  "</div>";

let greenpointEdesignationsDiv =
  '<div class="text-gray-800 p-6"><p class="fort-font text-left text-base">Close Up: Greenpoint, Brooklyn</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">During New York City\'s industrial heyday, from the mid-1800s until the mid-20th century, the Greenpoint/Williamsburg waterfront in Brooklyn was dominated by oil refineries, tanneries, and canning and copper manufacturing plants. At one time, the shores of Newtown Creek (which borders northeastern Greenpoint) were lined with 50 petroleum refineries. Over decades, as much as 30 million gallons of oil spilled or leaked into the soil and groundwater in Greenpoint, forming a petroleum plume beneath local businesses and residences. The oil also leached into Newtown Creek, where it mixed with raw sewage, garbage and other toxic chemicals. In 2010, Newtown Creek became the city\'s largest federal Superfund site.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">Despite the area\'s toxic legacies, in 2005, the City Council agreed to a massive zoning overhaul of Greenpoint and neighboring Williamsburg. In total, 184 blocks on or near the waterfront were upzoned and rezoned from manufacturing to commercial and residential uses.&#42;</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed"><span class="bg-orange-500 px-1 rounded text-white">E-Designated sites</span></p>' +
  '<p class="neue-font text-left text-sm italic max-w-3xl mx-auto mt-6 leading-relaxed">&#42; In an effort to retain some manufacturing jobs, the rezoning also established several mixed-use zones, meant to combine residential and light industrial uses.</p>' +
  "</div>";

let greenpointVCPDiv =
  '<div class="text-gray-800 p-6"><p class="neue-font text-left text-base max-w-3xl mx-auto leading-relaxed">Thanks mainly to the rezoning, approximately 193 properties in Greenpoint have received <span class="bg-orange-500 px-1 rounded text-white">e-designations</span>. Of those, 52 are enrolled in the <span class="bg-teal-600 text-white px-1 rounded">Voluntary Cleanup Program</span>. By 2019, 36 cleanups had reached completion. All of them were repurposed as either fully residential or mixed-use (commercial and residential) properties.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">Up until the early 2000s, Greenpoint contained the country\'s second-largest concentration of Polish Americans, in addition to large populations of Latino, South Asian and North African residents. Between 2000 and 2015, however, <a class="underline underline-offset-4" href="https://www1.nyc.gov/assets/planning/download/pdf/about/dcp-priorities/data-expertise/nyc-foreign-born-info-brief.pdf?r=1" target="_blank" rel="noopener noreferrer">the neighborhood\'s foreign-born population decreased by 49%</a>.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">Between December 2017 and December 2018, the median sales price for a residential property in Greenpoint rose by 37 percent to $1,225,000, making it the third most expensive neighborhood in Brooklyn. By April 2022, the <a class="underline underline-offset-4" href="https://www.realtor.com/realestateandhomes-search/Greenpoint_Brooklyn_NY/overview" target="_blank" rel="noopener noreferrer">median sales price for a home in Greenpoint was $1,675,000</a> and the median rent for a one-bedroom was <a class="underline underline-offset-4" href="https://www.zumper.com/rent-research/new-york-ny/greenpoint" target="_blank" rel="noopener noreferrer">$4,002</a> (median rent in Brooklyn was <a class="underline underline-offset-4" href="https://www.zumper.com/rent-research/brooklyn-ny" target="_blank" rel="noopener noreferrer">$3,659</a>).</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Here are some demographic comparisons between <span class="bg-sky-500 px-1 rounded text-white">Greenpoint</span> and <span class="bg-slate-300 px-1 rounded">New York City</span> over the last twenty years:</p>' +
  '<div class="text-gray-800 grid gap-4 lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-1 md:grid-rows-4 pt-4"><img class="pt-4" src="./images/youngGreenpoint.png"><img class="pt-4" src="./images/collegeGreenpoint.png">' +
  '<img class="pt-4" src="./images/rentGreenpoint.png"><img class="pt-4" src="./images/mfiGreenpoint.png"></div>' +
  "</div>";

let portRichmondDiv =
  '<div class="text-gray-800 p-6"><p class="fort-font text-left text-base">Close Up: Port Richmond, Staten Island</p>' +
  "<p class=\"neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed\">Port Richmond is one of New York City\'s oldest industrialized neighborhoods. In 1922, Port Richmond contained 175 industrial plants employing approximately 35,000 workers. During the Industrial Era, thousands of new migrants flocked to the area in search of factory jobs, making it Staten Island\'s densest and most ethnically diverse district.</p>" +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">Throughout the 1950s, \'60s, and \'70s, globalization and automation caused many of the factories to downsize or close. The decline of industrial businesses wreaked havoc on this working class neighborhood, causing many restaurants, repair shops, and other businesses associated with the industrial sector to close down as well.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">Eventually, municipal services replaced some of Port Richmond\'s empty factories. For example, the neighborhood currently houses a wastewater treatment plant, two private waste transfer stations, and a number of ship repair yards, auto body shops, and salvage yards. In addition, it contains several transit depots for Metropolitan Transportation Authority buses, Access-a-Ride vehicles, and Department of Sanitation garbage trucks.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">A recent Department of City Planning study found approximately 41 potential brownfield sites in Port Richmond. The study was one of about a dozen redevelopment proposals produced for the area over the last twelve years. However, to date, few initiatives from those plans have been implemented and the area\'s prospects for redevelopment remain elusive.</p>' +
  "</div>";

let portRichmondVCPDiv =
  '<div class="text-gray-800 p-6"><p class="neue-font text-left text-base max-w-3xl mx-auto leading-relaxed">Since 2000, there have been two rezonings in Port Richmond, both of which generated clusters of <span class="bg-orange-500 px-1 rounded text-white">e-designations</span>. However, to date, only one property in Port Richmond has been enrolled in the <span class="bg-teal-600 text-white px-1 rounded">Voluntary Cleanup Program</span>.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">Meanwhile, Port Richmond remains a dense, low-income and working-class neighborhood, and home to one of the city\'s fastest growing immigrant populations. <a class="underline underline-offset-4" href="https://www.osc.state.ny.us/files/reports/osdc/pdf/report-7-2019.pdf" target="_blank" rel="noopener noreferrer">Between 2000 and 2017, Staten Island\'s immigrant population increased by 57 percent, five times faster than the citywide growth rate</a> and faster than in any other borough. The vast majority of these recent migrants are concentrated in Port Richmond and its surrounding neighborhoods.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">In April 2022, the median sales price for a home in Port Richmond was <a class="underline underline-offset-4" href="https://www.realtor.com/realestateandhomes-search/Port-Richmond_Staten-Island_NY/overview" target="_blank" rel="noopener noreferrer">$500,000</a>, remaining relatively flat from the previous three years. Median rent for a <a class="underline underline-offset-4" href="https://www.zillow.com/rental-manager/market-trends/10302/?bedrooms=1" target="_blank" rel="noopener noreferrer">one-bedroom was $1,350</a> (compared to <a class="underline underline-offset-4" href="https://www.zumper.com/rent-research/staten-island-ny" target="_blank" rel="noopener noreferrer">$1,525 in Staten Island</a>), a $500 decrease from the previous year.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Here are some demographic comparisons between <span class="bg-sky-500 px-1 rounded text-white">Port Richmond</span> and <span class="bg-slate-300 px-1 rounded">New York City</span> over the last twenty years:</p>' +
  '<div class="text-gray-800 grid gap-4 lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-1 md:grid-rows-4 pt-4"><img class="pt-4" src="./images/youngPortRichmond.png"><img class="pt-4" src="./images/collegePortRichmond.png">' +
  '<img class="pt-4" src="./images/rentPortRichmond.png"><img class="pt-4" src="./images/mfiPortRichmond.png"></div>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed"></p>' +
  "</div>";

let gentrificationNYCDiv =
  '<div class="text-gray-800 p-6"><p class="fort-font text-left text-base">Gentrification Across NYC</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Brownfield cleanups did not cause demographic shifts in Greenpoint. But these projects play a necessary role in facilitating the neighborhood\'s redevelopment.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">To explore the association between cleanups and gentrification, we first needed to capture the complexities of the gentrification, or neighborhood upscaling, process. After dividing the city into its census tracts, we selected five key demographic indicators, and measured the degree to which they changed over a 19-year period.&#42 Darker areas show higher rates of gentrification between 2000 and 2019, and lighter areas show lower rates of gentrification. Importantly, some neighborhoods, like SoHo and Tribeca in Manhattan, gentrified prior to the year 2000; therefore they score low on our gentrification scale even though they are examples of industrial-turned-affluent neighborhoods.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Here is how <span class="bg-sky-400 px-1 rounded text-white">Port Richmond</span> compares to <span class="bg-emerald-400 px-1 rounded text-white">Greenpoint</span> and <span class="bg-slate-300 px-1 rounded">New York City</span> as a whole on this gentrification scale:</p>' +
  '<img class="pt-4" src="./images/gentrificationComparison.png"></p>' +
  '<p class="neue-font text-left text-sm italic max-w-3xl mx-auto mt-6 leading-relaxed">&#42; Variables include median family income, median rent, proportions of non-Hispanic white, 20- to 34-year-olds, and adults with a four-year college degree. For more detailed information on our methods, see notes at the end of this article.</p>' +
  "</div>";

let gentrificationVCPDiv =
  '<div class="text-gray-800 p-6"><p class="neue-font text-left leading-relaxed text-base mt-1">Looking at the city in its entirety, we find that <span class="bg-teal-600 text-white px-1 rounded">VCP</span> sites cluster in neighborhoods that score high on our <span class="bg-rose-500 text-white px-1 rounded">gentrification index</span>, like Greenpoint, as well as Williamsburg, West Chelsea, Long Island City and others.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Conversely, neighborhoods that score low on the gentrification index, such as Port Richmond and parts of southeast Queens, the South Bronx, and Southwest Brooklyn, are not lacking in contaminated properties. But they contain few VCP sites.</p>' +
  // '<p class="neue-font text-left leading-relaxed text-base mt-5">Certainly, brownfield cleanup programs do not cause gentrification. But, because they are designed to incentivize private development, their distribution is weighted towards redeveloping &mdash; and gentrifying &mdash; neighborhoods.</p>' +
  // '<p class="neue-font text-left leading-relaxed text-base mt-5">The City has taken laudable steps towards rebalancing this uneven distribution through grants and incentives geared towards community-based organizations and affordable housing projects. Our map shows that more needs to be done.</p>' +
  // '<p class="neue-font text-left leading-relaxed text-base mt-5">We need to expand the resources and programs available for cleanup and remediation in low-income neighborhoods where property values are <span class="underline underline-offset-4">not</span> on the rise. Living in healthy, safe neighborhoods with controlled contamination and productive property uses ought to be a public good. Shouldn\'t we find a way to deliver public programs meant to support that goal to all neighborhoods?</p>' +
  "</div>";

let notesBiosDiv = 
  '<div class="text-gray-800 py-10"><p class="neue-font text-left text-lg max-w-3xl mx-auto mt-6 leading-relaxed sm:px-0 px-3">Certainly, brownfield cleanup programs do not cause gentrification. But, because they are designed to incentivize private development, their distribution is weighted towards redeveloping &mdash; and gentrifying &mdash; neighborhoods.</p>' +
  '<div class="max-w-3xl mx-auto mt-6 w-full sm:px-0 px-3 grid gap-4 grid-cols-2 grid-rows-1 pt-2"><div><img class="" src="./images/144WestOptimized.jpg"><p class="neue-font text-left text-sm max-w-3xl mx-auto mt-2 leading-relaxed text-gray-500">Greenpoint 2022. Photo by Mitch Waxman</p></div><div><img class="" src="./images/PortRichmondOptimized.jpg"><p class="neue-font text-left text-sm max-w-3xl mx-auto mt-2 leading-relaxed text-gray-500">Port Richmond, 2022. Photo by Glen Johnson</p></div></div>' +
  // '<img class="max-w-3xl mx-auto mt-6 w-full sm:px-0 px-3" src="./images/144West.jpg">' +
  '<p class="neue-font text-left text-lg max-w-3xl mx-auto mt-6 leading-relaxed sm:px-0 px-3">The City has taken laudable steps towards rebalancing this uneven distribution through grants and incentives geared towards community-based organizations and affordable housing projects. Our map shows that more needs to be done.</p>' +
  '<p class="neue-font text-left text-lg max-w-3xl mx-auto mt-6 leading-relaxed sm:px-0 px-3">We need to expand the resources and programs available for cleanup and remediation in low-income neighborhoods where property values are <span class="underline underline-offset-4">not</span> on the rise. Living in healthy, safe neighborhoods with controlled contamination and productive property uses ought to be a public good. Shouldn\'t we find a way to deliver public programs meant to support that goal to all neighborhoods?</p>' +
  "</div>"+
  '<div class="text-gray-800 py-10"><p class="fort-font text-left text-base sm:text-lg max-w-3xl mx-auto sm:px-0 px-3">Notes</p>' +
  '<p class="neue-font text-left text-base sm:text-lg max-w-3xl mx-auto mt-6 leading-relaxed sm:px-0 px-3">The index of gentrification is based on a composite score that increases with increasing relative change of key variables (median family income, median rent and proportions of non-Hispanic white, 20- to 34-year-olds and adults with a four-year college degree) computed from the years 2000 to 2019 for New York City census tracts that are spatially normalized to the year 2010. These community-level input variables were chosen to represent the nuanced and processual nature of the socioeconomic and demographic shifts associated with gentrification.</p></div>' +
  '<div class="text-gray-800 py-10"><p class="fort-font text-left text-base sm:text-lg max-w-3xl mx-auto sm:px-0 px-3">Data Sources</p>' +
  '<p class="neue-font text-left text-base sm:text-lg max-w-3xl mx-auto mt-6 leading-relaxed sm:px-0 px-3"><ul class="list-disc max-w-3xl mx-auto pl-8 sm:pl-4 pr-3 sm:pr-0 text-base sm:text-lg">' +
  '<li><a class="underline underline-offset-4" href="https://www1.nyc.gov/site/planning/data-maps/open-data/dwn-edesignations.page" target="_blank" rel="noopener noreferrer">E Designated Sites</a>, New York City Department of City Planning</li>' +
  '<li class="pt-2"><a class="underline underline-offset-4" href="https://data.cityofnewyork.us/Environment/OER-Cleanup-Sites/3279-pp7v" target="_blank" rel="noopener noreferrer">OER Cleanup Sites</a>, Mayor\'s Office of Environmental Remediation (OER)</li>' +
  '<li class="pt-2"><a class="underline underline-offset-4" href="https://data.census.gov/cedsci/" target="_blank" rel="noopener noreferrer">American Community Survey 2019, 5-Year Estimates</a>, United States Census Bureau. Tables B01001 (sex by age), B01003 (total population), B02001 (race), B15001 (sex by age by educational attainment), B19013 (median household income), B25064 (median gross rent)</li>' +
  '<li class="pt-2"><a class="underline underline-offset-4" href="https://www1.nyc.gov/site/planning/data-maps/open-data/districts-download-metadata.page" target="_blank" rel="noopener noreferrer">New York City Borough Boundaries</a>, New York City Department of City Planning</li>' +
  '<li class="pt-2"><a class="underline underline-offset-4" href="https://www1.nyc.gov/site/planning/data-maps/open-data/census-download-metadata.page" target="_blank" rel="noopener noreferrer">New York City Neighborhood Tabulation Areas</a>, New York City Department of City Planning</li>' +
  '<li class="pt-2"><a class="underline underline-offset-4" href="https://docs.dos.ny.gov/opd/boa/PortRichmondBOA.pdf" target="_blank" rel="noopener noreferrer">Port Richmond Contaminated Sites</a>, Northfield Community Local Development Corporation and the New York State Department of State</li>' +
  '<li class="pt-2"><a class="underline underline-offset-4" href="https://data.ny.gov/Energy-Environment/Environmental-Remediation-Sites/c6ci-rzpg" target="_blank" rel="noopener noreferrer">New York State Environmental Remediation Sites</a>, New York State Department of Environmental Conservation</li>' +
  '<li class="pt-2"><a class="underline underline-offset-4" href="https://www.epa.gov/frs/geospatial-data-download-service" target="_blank" rel="noopener noreferrer">Federal Superfund sites</a>, United States Environmental Protection Agency</li>' +
  '<li class="pt-2"><a class="underline underline-offset-4" href="https://zola.planning.nyc.gov" target="_blank" rel="noopener noreferrer">Upzonings</a>, ZoLa, New York City\'s Zoning & Land Use Map, New York City Department of City Planning</li>' +
  '</ul></p></div>' +
  '<div class="text-gray-800 py-10"><p class="fort-font text-left text-base sm:text-lg max-w-3xl mx-auto sm:px-0 px-3">References</p>' +
  '<p class="neue-font text-left text-base sm:text-lg max-w-3xl mx-auto mt-6 leading-relaxed sm:px-0 px-3">Melissa Checker, <a class="underline underline-offset-4" href="https://nyupress.org/9781479855278/the-sustainability-myth/" target="_blank" rel="noopener noreferrer">The Sustainability Myth: Environmental Gentrification and the Politics of Justice</a>. New York: NYU Press, 2020.</p>' +
  '<p class="neue-font text-left text-base sm:text-lg max-w-3xl mx-auto mt-6 leading-relaxed sm:px-0 px-3">Glen Johnson, Melissa Checker, Scott Larson and Hanish Kodali, <a class="underline underline-offset-4" href="https://www.tandfonline.com/doi/full/10.1080/13658816.2021.1931873" target="_blank" rel="noopener noreferrer">A small area index of gentrification, applied to New York City</a>. <span class="italic">International Journal of Geographical Information Science</span>. 36: 1 (2022): 137-157.</p>' +
  '<p class="neue-font text-left text-base sm:text-lg max-w-3xl mx-auto mt-6 leading-relaxed sm:px-0 px-3">NYU Furman Center, "<a class="underline underline-offset-4" href="https://furmancenter.org/files/Analysis_of_NYC_Voluntary_Cleanup_Program.pdf" target="_blank" rel="noopener noreferrer">Making Dirty Land Clean: An Analysis of New York City\'s Voluntary Cleanup Program</a>," July 2018.</p>' +
  '</div>' +
  '<div class="text-gray-800 py-10"><p class="fort-font text-left text-base sm:text-lg max-w-3xl mx-auto sm:px-0 px-3">Share and Print buttons</p></div>' +
  '<div class="text-gray-800 py-10"><p class="fort-font text-left text-base sm:text-lg max-w-3xl mx-auto sm:px-0 px-3">Urban Omnibus logo</p></div>' +
  '<div class="text-gray-800 py-10"><p class="neue-font text-left text-base sm:text-lg max-w-3xl mx-auto mt-1 leading-relaxed sm:px-0 px-3"><span class="font-semibold">Melissa Checker</span> is an Associate Professor in the Department of Urban Studies at Queens College and the PhD Program in Anthropology at the City University of New York (CUNY) Graduate Center. Her research focuses on environmental racism, environmental justice activism and urban sustainability.</p>' +
  '<p class="neue-font text-left text-base sm:text-lg max-w-3xl mx-auto mt-6 leading-relaxed sm:px-0 px-3"><span class="font-semibold">Juan Francisco Saldarriaga</span> is a computational designer at Google. Formerly, he was the Senior Data and Design researcher at the <a class="underline underline-offset-4" href="https://brown.columbia.edu/" target="_blank" rel="noopener noreferrer">Brown Institute for Media Innovation</a> at Columbia University\'s School of Journalism. He works at the intersection of <a class="underline underline-offset-4" href="https://juanfrans.com/" target="_blank" rel="noopener noreferrer">data, visualization, mapping and the built environment</a>.</p>' +
  '<p class="neue-font text-left text-base sm:text-lg max-w-3xl mx-auto mt-6 leading-relaxed sm:px-0 px-3"><span class="font-semibold">Mariana Mogilevich</span> is Editor in Chief of Urban Omnibus.</p>' +
  '<p class="neue-font text-left text-base sm:text-lg max-w-3xl mx-auto mt-6 leading-relaxed sm:px-0 px-3"><span class="font-semibold">Glen Johnson</span> is an Associate Professor in the Department of Environmental, Occupational and Geospatial Health Sciences at the City University of New York (CUNY) School of Public Health. Glen enjoys cross-disciplinary collaboration to identify environmental and community-level social determinants of health outcomes.  He also develops community indices for 1) assessing health needs to assist public health agencies with program planning and 2) quantifying gentrification to assist urban planners and researchers in identifying forces of gentrification.</p>' +
  '<p class="neue-font text-left text-base sm:text-lg max-w-3xl mx-auto mt-6 leading-relaxed sm:px-0 px-3"><span class="font-semibold">Alexander Y. Mendell</span> is a student and researcher at the City University of New York (CUNY) School of Public Health and an incoming doctoral student at the University of Toronto School of Public Health. He holds degrees in civil engineering from McGill University and the University of Toronto and studies how buildings influence the health and wellbeing of their occupants.</p>' +
  '<p class="neue-font text-left text-base sm:text-lg max-w-3xl mx-auto mt-10 leading-relaxed sm:px-0 px-3">The views expressed here are those of the authors only and do not reflect the position of The Architectural League of New York.</p>' +
  '</div>' +
  "</div>";


var config = {
  style: "mapbox://styles/jfs2118/cl1z1wypf002i14pcm2b34w8y",
  accessToken:
    "pk.eyJ1IjoiamZzMjExOCIsImEiOiJlMUQzd2YwIn0.WLb3PYDt2z-XttOLFcQlVQ",
  showMarkers: false,
  markerColor: "#3FB1CE",
  inset: false,
  theme: "light",
  use3dTerrain: false,
  toptitle: toptitleDiv,
  title: titleDiv,
  byline: bylineDiv,
  description: introductionDiv,
  footer: notesBiosDiv,
  chapters: [
    {
      id: "stateFederalPrograms",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: stateAndFederalProgramsDiv,
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
      chapterDiv: eDesignationsDiv,
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
      chapterDiv: upzoningsDiv,
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
      chapterDiv: vcpProgramDiv,
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
      chapterDiv: greenpointEdesignationsDiv,
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
      chapterDiv: greenpointVCPDiv,
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
      chapterDiv: portRichmondDiv,
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
      id: "portRichmond-oerSites2",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: portRichmondVCPDiv,
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
      id: "gentrificationOverview",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: gentrificationNYCDiv,
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
      chapterDiv: gentrificationVCPDiv,
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
  ],
};
