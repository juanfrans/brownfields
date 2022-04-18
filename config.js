let toptitleDiv = '<p class="fort-font text-center text-xl max-w-3xl mx-auto my-4">Cleaning Up?</p>';
let titleDiv = '<p class="fort-font text-center text-5xl max-w-3xl mx-auto mt-2 mb-6">Main Title</p>';
let bylineDiv = '<p class="neue-font text-center text-sm max-w-3xl mx-auto mb-14 leading-relaxed">Melissa Checker, Juan Francisco Saldarriaga, Glen Johnson, Alex Mendell, Scott Larson, and Mariana Mogilevich • March 22, 2022</p>';

let descriptionDiv =
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">Everything is contaminated, to a degree.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">What determines what gets investigated, and cleaned up is not need, but market.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">Over last 15 (?) years since PlaNYC/OER announced that it would OR Over 13 years after OER launched its program to… provide municipal support for brownfield cleanup through VCP. What does that mean? A process of “brown gentrification” (as per Melissa\'s book) and selective remediation and repurposing of toxic properties. Cleanup is concentrated, while toxicity is distributed.</p>' +
  '<p class="neue-font text-left text-base max-w-3xl mx-auto mt-6 leading-relaxed">How do you want to characterize the relationship between contamination, redevelopment, cleanup, gentrification (and the layers of this map)? (ie cleanup does not cause gentrification but goes clearly hand in hand with it, while leaving areas less desirable to the market to their own devices). Or, developers decide where cleanup happens, with the city\'s help.</p>' +
  '<p class="neue-font text-center text-base max-w-3xl mx-auto mt-6 leading-relaxed">Scroll to continue<br>▼</p>';

let divChapter1 =
  '<div class="p-6"><p class="fort-font text-left text-base">E-Designations</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">E-designation means that, as a consequence of a zoning action, a property is subject to environmental requirements relating to air, noise or hazardous materials.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">These requirements must be investigated and addressed before an owner can obtain a building permit for the property\'s redevelopment.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">OER estimates there are 7,000 properties designated by the City as subject to mandatory environmental study and management. Perhaps as many as 40 percent of these properties are chronically vacant or underutilized contaminated land, commonly known as brownfield sites.</p>' +
  '<svg class="inline-block align-middle mt-5" height="16" width="16"><circle cx="8" cy="8" r="7" stroke="black" stroke-width=".5" fill="#ff8500" /></svg><p class="inline-block align-middle text-sm mt-5 ml-1">E-Designated sites</p>' +
  '</div>';

let divChapter2 =
  '<div class="p-6"><p class="fort-font text-left text-base">Upzoning in Residential Districts</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Zoning codes dictate the bulk and density of residential properties. They specify heights, lot sizes, set-backs, parking requirements, and in some cases, the general look of new buildings (whether they need to blend into existing buildings by having pitched roofs, etc.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">In NYC, residence districts are divided into 10 subtypes. Types 1-5 are considered low density and generally include single-family detached, semi-detached and attached buildings. Residential zone types 6-9 include apartment buildings that house multiple families. The zoning number indicates how high they are built and how many units they can contain. Zones 9 and 10 include tower buildings.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">"Upzoning" changes the zoning requirements of a particular to allow for taller buildings that house more families and cover a wider square footage area.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">It also includes areas where along with greater density, zoning uses change (i.e., from manufacturing to residential)</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Although redevelopment can happen with or without upzoning, by allowing for larger, new developments, historically, upzoning has invited private developers to build multi-family buildings targeted to more affluent residents.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Because upzoning is known to encourage new development, starting in 1987, new developments in upzoned areas could receive density bonuses if they preserved or rehabilitated affordable housing. This is known as the “Voluntary Inclusionary Housing” program.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Our map shows how upzonings correlated with our gentrification index (based on 5 variables - increases in rents, incomes, education levels, and numbers of 20-34 year old and decreases in non-white populations), during the years 20020-2018.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">It also includes areas where along with greater density, zoning uses change (i.e., from manufacturing to residential)</p>' +
  '<svg class="inline-block align-middle mt-5" height="16" width="16"><rect x="1" y="1" width="14" height="14" stroke="black" stroke-width=".5" fill="#d8d8d8" /></svg><p class="inline-block align-middle text-sm mt-5 ml-1">Upzoned areas</p><br>' +
  '</div>';

let divChapter3 =
  '<div class="p-6"><p class="fort-font text-left text-base">Through Different Administrations</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Bloomberg rezoned 1/3 of the City. A substantial number of these downzoned wealthy, white neighborhoods (like Park Slope). But he is more notorious for his upzonings tended to occur in low income, minority neighborhoods like Williamsburg/Greenpoint, Long Island City, parts of Harlem, Dumbo, East Village). In these areas, low income populations shrunk while upper income populations swelled. In total TK units of affordable housing were lost under Bloomberg.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">De Blasio was elected with a mandate to reverse the trend in affordable housing loss. He sought to do this in two main ways. First, his administration passed a mandatory inclusionary housing (MIH) rule, requiring that developers benefiting from an upzoning to set aside 20-40% of new units for affordable housing.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Second, he promoted housing density by upzoning large areas to include more housing units.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">MIH plus density would increase affordable housing units.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Between 2015 and 2020, six neighborhoods underwent upzonings to allow for greater housing density.</p>' +
  '<svg class="inline-block align-middle mt-5" height="16" width="16"><rect x="1" y="1" width="14" height="14" stroke="black" stroke-width="0" fill="#bdd9f5" /></svg><p class="inline-block align-middle text-sm mt-5 ml-1">Bloomberg 2002 - 2005</p><br>' +
  '<svg class="inline-block align-middle mt-1" height="16" width="16"><rect x="1" y="1" width="14" height="14" stroke="black" stroke-width="0" fill="#80b9db" /></svg><p class="inline-block align-middle text-sm mt-1 ml-1">Bloomberg 2006 - 2009</p><br>' +
  '<svg class="inline-block align-middle mt-1" height="16" width="16"><rect x="1" y="1" width="14" height="14" stroke="black" stroke-width="0" fill="#3e8ec4" /></svg><p class="inline-block align-middle text-sm mt-1 ml-1">Bloomberg 2010 - 2013</p><br>' +
  '<svg class="inline-block align-middle mt-1" height="16" width="16"><rect x="1" y="1" width="14" height="14" stroke="black" stroke-width="0" fill="#ae5d7a" /></svg><p class="inline-block align-middle text-sm mt-1 ml-1">de Blasio 2014 - 2017</p>' +
  "</div>";

let divChapter4 =
  '<div class="p-6"><p class="fort-font text-left text-base">Upzoning in Greenpoint</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">The city adopted the Greenpoint/Williamsburg Waterfront Access Plan (WAP) in 2005 (Larson, 2013). The comprehensive plan broadly sought to expand waterfront access and housing and commercial development through contextual rezoning. Previous manufacturing areas zoned as M1 and M3 were rezoned to R6 and R8 residential zones, mixed use zones and parkland (Greenpoint-Williamsburg Land Use and Waterfront Plan, 2006).</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Luxury developments in the newly rezoned areas were granted a “zoning bonus,” allowing them to construct additional floor area in exchange for the making 20 percent of the total number of units “affordable” based on a City affordability measure (Greenpoint-Williamsburg Land Use and Waterfront Plan, 2006).</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Greenpoint landing is one major luxury development along the waterfront. Developed by Park Tower Group with Brookfield Properties, this project will open 10 new buildings across 22 acres over the next decade, introducing 5,500 new residential units to the neighborhood (with 1,400 designated affordable). The first completed building was One Blue Slip. In 2018, the 30-story tower opened up offering rental studios for $2800 per month. Other buildings still in the design or construction phase include the 40-story tower at Two Blue Slip and the 22-story tower at 33 Commercial Street.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">2019 Demographics:'+
  '<ul class="list-disc list-inside"><li>66.8% white</li>' +
    '<li>15.3% Hispanic</li>' +
    '<li>3% Black</li>' +
    '<li>6.8% Asian</li>' +
    '<li>Median Income $104,216 (compared to $72,108 NYC)</li>' +
    '<li>Median Rent $2,171 (compared to $1,190 NYC)</li>' +
    '<li>Between 2000 and 2016 - 116% rise in home values; household income doubled</li></ul></p>' +
    '<svg class="inline-block align-middle mt-5" height="16" width="16"><rect x="1" y="1" width="14" height="14" stroke="black" stroke-width="0" fill="#bdd9f5" /></svg><p class="inline-block align-middle text-sm mt-5 ml-1">Bloomberg 2002 - 2005</p><br>' +
  '<svg class="inline-block align-middle mt-1" height="16" width="16"><rect x="1" y="1" width="14" height="14" stroke="black" stroke-width="0" fill="#80b9db" /></svg><p class="inline-block align-middle text-sm mt-1 ml-1">Bloomberg 2006 - 2009</p><br>' +
  '<svg class="inline-block align-middle mt-1" height="16" width="16"><rect x="1" y="1" width="14" height="14" stroke="black" stroke-width="0" fill="#3e8ec4" /></svg><p class="inline-block align-middle text-sm mt-1 ml-1">Bloomberg 2010 - 2013</p><br>' +
  '<svg class="inline-block align-middle mt-1" height="16" width="16"><rect x="1" y="1" width="14" height="14" stroke="black" stroke-width="0" fill="#ae5d7a" /></svg><p class="inline-block align-middle text-sm mt-1 ml-1">de Blasio 2014 - 2017</p>' +
  '</div>';

let divChapter5 =
  '<div class="p-6"><p class="fort-font text-left text-base">Voluntary Cleanup Program</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Announced in Started in 2007; launched in 2009.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Defined as “chronically vacant or underutilized contaminated land” that inhibits development due to costs of cleanup and liability.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Brownfields can contain a wide variety of heavy metals, organic solvents, and other pollutants that remain a legacy of past industrial land uses and lax pollution management practices that predate modern standards for environmental protection. If left abandoned, these properties are a source of heightened public exposure to environmental toxins for our most disadvantaged citizens.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Developers who wanted to repurpose one of these sites could enroll in the Voluntary Cleanup Program. This would allow participants to:'+
  '<ul class="list-disc list-inside"><li>Deduct cleanup costs from federal taxes</li>' +
    '<li>On completion, City grants protection from future liability to both owners and their lenders.</li>' +
    '<li>Office of Environmental Remediation (OER) offered developers close guidance and assistance throughout the assessment and remediation, or cleanup, process.</li>' +
    '<li>Streamlined process. Project approval required authorization only by the OER, bypassing lengthy City Council or Community Board approvals.</li></ul></p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">In order to encourage development in disadvantaged areas (that might be less likely to return profit to investors/developers, OER offers bonus grants to for- profit and nonprofit developers for projects that would in disadvantaged areas that provide public benefits such as open space, affordable housing, etc. These are known as “Preferred Community Development” projects.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">However, real estate speculation, an important part of the gentrification process, is premised on investing in areas where property values are low, or “disadvantaged”. And almost any redevelopment project in a disadvantaged area can be framed as providing community benefits.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">So there is very little incentive for private developers to invest in areas where real estate speculation is not underway.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">In those neighborhoods where developers are less likely to return a profit, this mechanism for cleaning up contaminated properties does not really work. So, cleanups are unevenly distributed across the city, as shown on the map.</p>' +
  '</div>';

  let divChapter6 =
  '<div class="p-6"><p class="fort-font text-left text-base">Cleaning Up Greenpoint - E-Designations</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">During New York City\'s industrial heyday, from the mid 1800s until the mid 20th century, the Greenpoint/Williamsburg waterfront in Brooklyn was dominated by oil refineries, tanneries, canning and copper manufacturing plants, and the surrounding waterways were a dumping ground for toxic and radioactive contaminants, raw sewage, and garbage (Greenpoint Petroleum Remediation Project, 2019).</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">In 1950, a sewer explosion released unrefined oil from the surrounding ExxonMobil, Texaco and BP refineries. Over the next 28 years, the spill released up to 30 million gallons of oil before being discovered by the Coast Guard (Greenpoint Oil Spill, n.d.).</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">The creek was designated a Superfund site in 2009.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Approximately ?? e-designated sites.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">By 2017, total VCP sites at or near completion = 23.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">The map shows the location of e-designated properties in Greenpoint.</p>' +
  '<svg class="inline-block align-middle mt-5" height="16" width="16"><circle cx="8" cy="8" r="7" stroke="black" stroke-width=".5" fill="#ff8500" /></svg><p class="inline-block align-middle text-sm mt-5 ml-1">E-Designated sites</p>' +
  '</div>';

  let divChapter7 =
  '<div class="p-6"><p class="fort-font text-left text-base">Cleaning Up Greenpoint - Voluntary Cleanup Sites</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">This map shows the location of redeveloped sites that were enrolled in the Voluntary Cleanup Program. All have a completed or near-completed status</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Defined as “chronically vacant or underutilized contaminated land” that inhibits development due to costs of cleanup and liability.</p>' +
  '<svg class="inline-block align-middle mt-5" height="16" width="16"><circle cx="8" cy="8" r="7" stroke="black" stroke-width=".5" fill="#3fa078" /></svg><p class="inline-block align-middle text-sm mt-5 ml-1">Voluntary cleanup sites</p><br>' +
  '<svg class="inline-block align-middle mt-1" height="16" width="16"><circle cx="8" cy="8" r="7" stroke="black" stroke-width=".5" fill="#ff8500" /></svg><p class="inline-block align-middle text-sm mt-1 ml-1">E-Designated sites</p>' +
  '</div>';

  let divChapter8 =
  '<div class="p-6"><p class="fort-font text-left text-base">Port Richmond</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">The Staten Island port located here, which during the industrial era gave rise to a large number of successful factories, ship repair yards and salvage yards along the shoreline.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">Port Richmond contains approximately 14 sites along the shoreline with known contamination, including two former Superfund sites.</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">2019 Demographics:'+
  '<ul class="list-disc list-inside"><li>46.6% Hispanic or Latino</li>' +
    '<li>33.5% Black</li>' +
    '<li>12.2% White</li>' +
    '<li>3.9% Asian</li>' +
    '<li>Median Income - $56,595 (compared to $72,108 in NYC)</li>' +
    '<li>Average household size - 4.5 people (compared to 2.5 in NYC)</li>' +
    '<li>26% are foreign born (although this number is probably significantly higher)</li></ul></p>' +
    '<p class="neue-font text-left leading-relaxed text-base mt-5">Approx. 87 E-designated sites in one small area (approx. ½ square mile) - see below map</p>' +
  '<p class="neue-font text-left leading-relaxed text-base mt-5">By 2017, total VCP sites at or near completion = 1</p>' +
  '<svg class="inline-block align-middle mt-5" height="16" width="16"><circle cx="8" cy="8" r="7" stroke="black" stroke-width=".5" fill="#3fa078" /></svg><p class="inline-block align-middle text-sm mt-5 ml-1">Voluntary cleanup sites</p><br>' +
  '<svg class="inline-block align-middle mt-1" height="16" width="16"><circle cx="8" cy="8" r="7" stroke="black" stroke-width=".5" fill="#ff8500" /></svg><p class="inline-block align-middle text-sm mt-1 ml-1">E-Designated sites</p>' +
  '</div>';

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
//   footer: "Source: source citations, etc.",
  chapters: [
    {
        id: "eDesignations",
        alignment: "center",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter1,
        location: {
          center: [-73.96, 40.7],
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
            duration: 300
        },
        {
            layer: "upzonings",
            opacity: 0,
            duration: 300
        },
        {
            layer: "cleanupSites",
            opacity: 0,
            duration: 300
        },
        {
            layer: "upzoningsAdmin",
            opacity: 0,
            duration: 300
        }
      ],
      onChapterExit: [
        {
          layer: "eDesignations",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
        id: "upzoning",
        alignment: "center",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter2,
        location: {
          center: [-73.96, 40.7],
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
            duration: 300
        },
        {
            layer: "upzonings",
            opacity: 1,
            duration: 300
        },
        {
            layer: "cleanupSites",
            opacity: 0,
            duration: 300
        },
        {
            layer: "upzoningsAdmin",
            opacity: 0,
            duration: 300
        }
      ],
      onChapterExit: [
      ],
    },
    {
        id: "upzoningAdmin",
        alignment: "center",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter3,
        location: {
          center: [-73.96, 40.7],
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
            duration: 300
        },
        {
            layer: "upzonings",
            opacity: 0,
            duration: 300
        },
        {
            layer: "cleanupSites",
            opacity: 0,
            duration: 300
        },
        {
            layer: "upzoningsAdmin",
            opacity: 1,
            duration: 300
        }
      ],
      onChapterExit: [
      ],
    },
    {
        id: "greenpoint",
        alignment: "center",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter4,
        location: {
          center: [-73.948, 40.723],
          zoom: 13.5,
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
            duration: 300
        },
        {
            layer: "upzonings",
            opacity: 0,
            duration: 300
        },
        {
            layer: "cleanupSites",
            opacity: 0,
            duration: 300
        },
        {
            layer: "upzoningsAdmin",
            opacity: 1,
            duration: 300
        }
      ],
      onChapterExit: [
      ],
    },
    {
        id: "cleanup",
        alignment: "full",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter5,
        location: {
          center: [-73.948, 40.723],
          zoom: 13.5,
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
            duration: 300
        },
        {
            layer: "upzonings",
            opacity: 0,
            duration: 300
        },
        {
            layer: "cleanupSites",
            opacity: 0,
            duration: 300
        },
        {
            layer: "upzoningsAdmin",
            opacity: 0,
            duration: 300
        },
      ],
      onChapterExit: [
      ],
    },
    {
        id: "eDesignationsGreenpoint",
        alignment: "center",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter6,
        location: {
          center: [-73.948, 40.723],
          zoom: 13.5,
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
            duration: 300
        },
        {
            layer: "upzonings",
            opacity: 0,
            duration: 300
        },
        {
            layer: "cleanupSites",
            opacity: 0,
            duration: 300
        },
        {
            layer: "upzoningsAdmin",
            opacity: 0,
            duration: 300
        },
      ],
      onChapterExit: [
        {
          layer: "gentrificationIndex",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
        id: "cleanupGreenpoint",
        alignment: "center",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter7,
        location: {
          center: [-73.948, 40.723],
          zoom: 13.5,
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
            duration: 300
        },
        {
            layer: "upzonings",
            opacity: 0,
            duration: 300
        },
        {
            layer: "cleanupSites",
            opacity: 1,
            duration: 300
        },
        {
            layer: "upzoningsAdmin",
            opacity: 0,
            duration: 300
        },
      ],
      onChapterExit: [
      ],
    },
    {
        id: "cleanupPortRichmond",
        alignment: "center",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter8,
        location: {
          center: [-74.141, 40.637],
          zoom: 15.5,
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
            duration: 300
        },
        {
            layer: "upzonings",
            opacity: 0,
            duration: 300
        },
        {
            layer: "cleanupSites",
            opacity: 1,
            duration: 300
        },
        {
            layer: "upzoningsAdmin",
            opacity: 0,
            duration: 300
        },
      ],
      onChapterExit: [
      ],
    },
  ],
};