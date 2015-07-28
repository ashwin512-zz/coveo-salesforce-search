(function() {
  var dict = {
      "Unknown": "Ukendt",
      "And": "OG",
      "Authenticating": "Legaliserer {0}…",
      "Clear": "Ryd {0}",
      "CompleteQuery": "Afslut forespørgsel",
      "Exclude": "Udeluk {0}",
      "EnterTag": "Tilføj Mærke",
      "Next": "Næste",
      "Last": "Sidste",
      "Link": "Link",
      "Or": "ELLER",
      "Previous": "Forrige",
      "QueryDidntMatchAnyDocuments": "Din forespørgsel matchede ingen dokumenter.",
      "QueryException": "Din forespørgsel har en fejl: {0}",
      "Me": "Mig",
      "Remove": "Fjern",
      "Search": "Søg",
      "SearchFor": "Søg efter {0}",
      "ShareQuery": "Del forespørgsel",
      "Preferences": "Foretrukne",
      "LinkOpeningSettings": "Indstillinger til åbning af links",
      "Reauthenticate": "Gen-legaliser {0}",
      "ResultsFilteringExpression": "Tilkendegivelser filtrerer resultater",
      "FiltersInYourPreferences": "Filtre i dine præferencer",
      "Create": "Opret",
      "SearchIn": "Søg i {0}",
      "Seconds": "i {0} sekund<pl>er</pl>",
      "ShowingResultsOf": "Resultat<pl>er</pl> {0}<pl>-{1}</pl> af {2}",
      "SwitchTo": "Skift til {0}",
      "Unexclude": "Udeluk ikke {0}",
      "ClearAllFilters": "Ryd alle filtre",
      "SkipLogin": "Spring over login",
      "LoginInProgress": "Login er i gang, vent venligst …",
      "Login": "Log ind",
      "GetStarted": "Kom i gang",
      "More": "Mere",
      "Less": "Færre",
      "Settings": "Indstillinger",
      "Score": "Score",
      "ScoreDescription": "Scoren beregnes ud fra antallet af hændelser samt fra positionen i resultatsættet.",
      "Occurrences": "Hændelser",
      "OccurrencesDescription": "Sortér efter antal hændelser, hvor værdier, der har det højeste antal, vises først.",
      "Label": "Mærke",
      "Of": "af",
      "LabelDescription": "Sortér alfabetisk i feltværdierne.",
      "Value": "Værdi",
      "ValueDescription": "Sorter efter værdierne i det første beregnede felt",
      "AlphaAscending": "Værdi stiger",
      "AlphaDescending": "Værdi falder",
      "ChiSquare": "Chi-Square",
      "Nosort": "Ingen sortering",
      "RelativeFrequency": "Relativ frekvens",
      "RelativeFrequencyDescription": "Sortér efter den relative hyppighed af værdier. Mindre fællesværdier vises højere.",
      "DateDistribution": "Distributionsdato",
      "Custom": "Almindelig",
      "CustomDescription": "Sortér efter almindelig ordre",
      "ComputedField": "Beregnet felt",
      "Ascending": "Stiger",
      "Descending": "Falder",
      "noResultFor": "Ingen resultater for {0}",
      "autoCorrectedQueryTo": "Forespørgsel blev automatisk rettet til {0}",
      "didYouMean": "Mente du: {0}",
      "SuggestedResults": "Foreslåede resultater",
      "SuggestedQueries": "Foreslåede forespørgsler",
      "MostRelevantItems": "Mest relevante punkter:",
      "AllItems": "Alle punkter:",
      "ShowLess": "Vis mindre",
      "ShowMore": "Vis mere",
      "HideFacet": "Skjul facet",
      "ShowFacet": "Vis facet",
      "AndOthers": "og {0} andet",
      "Others": "{0} andet",
      "MostRelevantPosts": "Mest relevante opslag:",
      "CompleteThread": "Færdiggør tråd:",
      "ShowCompleteThread": "Vis den færdige tråd:",
      "ShowOnlyTopMatchingPosts": "Vis kun matchende opslag",
      "MostRelevantReplies": "Mest relevante svar:",
      "AllConversation": "Hele samtalen:",
      "ShowAllConversation": "Vis hele samtalen",
      "ShowAllReplies": "Vis alle svar",
      "ShowOnlyMostRelevantReplies": "Vis kun mest relevante svar",
      "Close": "Luk",
      "Open": "Åbn",
      "OpenInOutlookWhenPossible": "Åbn i Outlook (hvis det er muligt)",
      "AlwaysOpenInNewWindow": "Åbn altid resultater i et nyt vindue",
      "QuickView": "Hurtigvis",
      "ErrorReport": "Fejlrapport",
      "OopsError": "Ups! Noget gik galt på serveren.",
      "ProblemPersists": "Kontakt administratoren, hvis problemet fortsætter.",
      "GoBack": "Gå tilbage",
      "Reset": "Nulstil",
      "Retry": "Prøv igen",
      "MoreInfo": "Mere information",
      "Username": "Brugernavn",
      "Password": "Adgangskode",
      "PostedBy": "Opslået af",
      "CannotConnect": "Kan ikke forbinde til serveradressen.",
      "BadUserPass": "Adgangskoden passer ikke til brugernavnet.",
      "PleaseEnterYourCredentials": "Indtast venligst dine brugeroplysninger for {0}.",
      "PleaseEnterYourSearchPage": "Indtast venligst din søgesides URL",
      "Collapse": "Klap sammen",
      "Collapsable": "Sammenklappelig",
      "Expand": "Udvid",
      "Today": "I dag",
      "Yesterday": "I går",
      "Tomorrow": "I morgen",
      "Duration": "Varighed: {0}",
      "IndexDuration": "Indeksvarighed: {0}",
      "ProxyDuration": "Proxyvarighed: {0}",
      "ClientDuration": "Kundevarighed: {0}",
      "Unavailable": "Utilgængelig",
      "Reply": "Svar",
      "ReplyAll": "Svar alle",
      "Forward": "Videresend",
      "From": "Fra",
      "Caption": "Undertekst",
      "Expression": "Tilkendegivelse",
      "Tab": "Fane",
      "Tabs": "Faner",
      "EnterExpressionName": "Indtast tilkendegivelses navn",
      "EnterExpressionToFilterWith": "Indtast tilkendegivelse til at filtrere resultater med",
      "SelectTab": "Vælg fane",
      "SelectAll": "Vælg alle",
      "PageUrl": "Søgesides URL",
      "ErrorSavingToDevice": "Fejl under gemning af informationen på din enhed",
      "ErrorReadingFromDevice": "Fejl under læsning af informationen fra din enhed",
      "AppIntro": "Tal med en produktspecialist, der kan besvare dine spørgsmål om Coveo og hjælpe dig med at beslutte hvilken Coveo-løsning, der passer til dig. Eller prøv en live demo!",
      "TryDemo": "Prøv demoen",
      "ContactUs": "Kontakt os",
      "NewToCoveo": "Ny med Coveo?",
      "LetUsHelpGetStarted": "Lad os hjælpe dig med at komme i gang",
      "LikesThis": "{0} synes godt om dette.",
      "CannotConnectSearchPage": "Kan ikke forbinde til din søgeside",
      "AreYouSureDeleteFilter": "Er du sikker på, du vil slette filter {0} med tilkendegivelsen {1}",
      "OnlineHelp": "Onlinehjælp",
      "Done": "Færdig",
      "SaveFacetState": "Gem denne facettilstand",
      "ClearFacetState": "Ryd facettilstand",
      "DisplayingTheOnlyMessage": "Viser den eneste besked i denne samtale",
      "NoNetworkConnection": "Ingen netværksforbindelse",
      "UnknownConnection": "Ukendt forbindelse",
      "EthernetConnection": "Ethernetforbindelse",
      "WiFi": "WiFi-forbindelse",
      "CELL": "Mobil forbindelse",
      "CELL_2G": "Mobil 2G forbindelse",
      "CELL_3G": "Mobil 3G forbindelse",
      "CELL_4G": "Mobil 4G forbindelse",
      "Relevance": "Relevans",
      "Date": "Dato",
      "Amount": "Mængde",
      "QueryExceptionNoException": "Ingen undtagelse",
      "QueryExceptionInvalidSyntax": "Ugyldig syntaks",
      "QueryExceptionInvalidCustomField": "Ugyldigt standardfelt",
      "QueryExceptionInvalidDate": "Ugyldig dato",
      "QueryExceptionInvalidExactPhrase": "Ugyldig eksakt sætning",
      "QueryExceptionInvalidDateOp": "Ugyldig datooperatør",
      "QueryExceptionInvalidNear": "Ugyldig NEAR operatør",
      "QueryExceptionInvalidWeightedNear": "Ugyldigt vægtet NEAR",
      "QueryExceptionInvalidTerm": "Ugyldigt udtryk",
      "QueryExceptionTooManyTerms": "For mange udtryk",
      "QueryExceptionWildcardTooGeneral": "Wildcard for generelt",
      "QueryExceptionInvalidSortField": "Ugyldigt sorteringsfelt",
      "QueryExceptionInvalidSmallStringOp": "Ugyldig kortbåndsoperatør",
      "QueryExceptionRequestedResultsMax": "Maksimum anmodede resultater",
      "QueryExceptionAggregatedMirrorDead": "Aggregeret spejl er offline",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "Timeout ved aggregeret spejlforespørgsel",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "Ugyldigt konstruktionsnummer ved aggregeret spejl",
      "QueryExceptionAggregatedMirrorCannotConnect": "Aggregeret spejl kan ikke forbindes",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "Ikke nok ledende karakter wildcard",
      "QueryExceptionSecurityInverterNotFound": "Sikkerhedsomvender kunne ikke findes",
      "QueryExceptionSecurityInverterAccessDenied": "Adgang til sikkerhedsomvender nægtet",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "Aggregeret spejl kan ikke personificeres",
      "QueryExceptionUnexpected": "Uforventet",
      "QueryExceptionAccessDenied": "Adgang nægtet",
      "QueryExceptionSuperUserTokenInvalid": "Superbrugertegn ugyldigt",
      "QueryExceptionSuperUserTokenExpired": "Superbrugertegn er udløbet",
      "QueryExceptionLicenseQueriesExpired": "Forespørgselslicens udløbet",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "Licenssuperbrugertegn understøttes ikke",
      "QueryExceptionInvalidSession": "Ugyldig session",
      "QueryExceptionInvalidDocument": "Ugyldigt dokument",
      "QueryExceptionSearchDisabled": "Søgning invalideret",
      "FileType": "Filtype",
      "ShowAttachment": "Vis vedhæftede fil",
      "OnFeed": "på {0}'s feed.",
      "Author": "Forfatter",
      "NoTitle": "Ingen titel",
      "CurrentSelections": "Aktuelle valg",
      "AllContent": "Alt indhold",
      "CancelLastAction": "Annullér sidste handling",
      "SearchTips": "Søgetips",
      "CheckSpelling": "Tjek stavningen i dine nøgleord.",
      "TryUsingFewerKeywords": "Prøv at benytte færre, andre eller mere generelle nøgleord.",
      "SelectFewerFilters": "Vælg færre filtre for at gøre din søgning bredere.",
  }
  var locales = String["locales"] || (String["locales"] = {});
  locales["da"] = _.extend({}, locales["da"], dict);
  String["toLocaleString"].call(this, { "da": dict });
  String["locale"] = "da";
  String["defaultLocale"] = "en";
})();
/*
 * Globalize Culture da
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */

(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo( "da", "default", {
	name: "da",
	englishName: "Danish",
	nativeName: "dansk",
	language: "da",
	numberFormat: {
		",": ".",
		".": ",",
		negativeInfinity: "-INF",
		positiveInfinity: "INF",
		percent: {
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["$ -n","$ n"],
			",": ".",
			".": ",",
			symbol: "kr."
		}
	},
	calendars: {
		standard: {
			"/": "-",
			firstDay: 1,
			days: {
				names: ["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],
				namesAbbr: ["sø","ma","ti","on","to","fr","lø"],
				namesShort: ["sø","ma","ti","on","to","fr","lø"]
			},
			months: {
				names: ["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december",""],
				namesAbbr: ["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd-MM-yyyy",
				D: "d. MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "d. MMMM yyyy HH:mm",
				F: "d. MMMM yyyy HH:mm:ss",
				M: "d. MMMM",
				Y: "MMMM yyyy"
			}
		}
	}
});

}( this ));
