# ![LOGO](logo.png) U.S. EPA Enforcement and Compliance History Online (ECHO) - Enforcement Case Search **flow**ground Connector

## Description

A generated **flow**ground connector for the U.S. EPA Enforcement and Compliance History Online (ECHO) - Enforcement Case Search API (version 1.0.0).

Generated from: https://api.apis.guru/v2/specs/epa.gov/case/1.0.0/swagger.json<br/>
Generated at: 2019-05-07T17:40:22+03:00

## API Description

Enforcement and Compliance History Online (ECHO) is a tool developed and maintained by EPA's Office of Enforcement and Compliance Assurance for public use. ECHO provides integrated compliance and enforcement information for about 800,000 regulated facilities nationwide.
<BR><BR>CASE Rest Services provide multiple service endpoints, each with specific capabilities, to search and retrieve data on civil cases entered into the 
Integrated Compliance Information System (ICIS) and criminal cases entered into the Summary of Criminal Prosecutions database.  
See Enforcement Case Search Help (https://echo.epa.gov/help/enforcement-case-search-help) for additional information on searching civil and criminal cases. 
<BR><BR>
The get_cases, get_map, get_qid, and get_download end points are meant to be used together, while the enhanced get_case_info end point is self contained..<br>  
The recommended use scenario for get_cases, get_qid, get_map, and get_downoad is:
<br>
<br><b>1)</b>  Use get_cases to validate passed query parameters, obtain summary statistics and to obtain a query_id (QID).  QIDs are time sensitive and will be valid for approximately 30 minutes.
<br><b>2)</b>  Use get_qid, with the returned QID, to paginate through arrays of case results.
<br><b>3)</b>  Use get_map, with the returned QID, to zoom in/out and pan on the clustered and individual facility coordinates, related to the returned cases, that meet the QID query criteria.
<br><b>4)</b>  Use get_download, with the returned QID, to generate a Comma Separated Value (CSV) file of facility information that meets the QID query criteria.
<br><br>
In addition to the service endpoints listed above there are two detailed case report services, one for civil cases (get_case_report) and one for criminal cases (get_crcase_report). 
See the Civil Enforcement Case Report Help (https://echo.epa.gov/help/reports/enforcement-case-report-help) and the Criminal Case Report Help (https://echo.epa.gov/help/reports/criminal-case-report-help) for additional information 
on then data returned from these two services.   
<br>
Additional ECHO Resources:   <a href="https://echo.epa.gov/tools/web-services">Web Services</a>, <a href="https://echo.epa.gov/resources/echo-data/about-the-data">About ECHO's Data</a>, <a href="https://echo.epa.gov/tools/data-downloads">Data Downloads</a>
<br>

## Authorization

This API does not require authorization.

## Actions

### Enforcement Case Search (new version)

> The get_case_info service end point searches for civil enforcement and criminal cases based on the provided selection criteria and returns either individual cases or clusters of case facility locations.

*Tags:* `Case Enforcement`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `p_case_category` - _optional_ - Case Category Filter.  Enter one or more case category codes to filter results.   Provide multiple values as a comma-delimited list.
- AFR = Administrative - Formal
- AIF = Administrative - Informal
- JDC = Judicial
* `p_case_status` - _optional_ - Case Status Code Filter.  Enter one or more case status codes to limit results.  Provide multiple values as a comma-delimited list.
* `p_milestone` - _optional_ - Administrative or Judicial Milestone Filter.  Enter one or milestone values to restrict results.  Provide multiple values as a comma-delimited list.
* `p_from_date` - _optional_ - Administrative or Judicial Milestone Date Range Start Limiter.  Enter a date value in MM/DD/YYYY format to limit milestone results.  Parameter p_to_date must also be populated when using this parameter option.
* `p_to_date` - _optional_ - Administrative or Judicial Milestone Date Range End Limiter.  Enter a date value in MM/DD/YYYY format to limit milestone results.  Parameter p_from_date must also be populated when using this parameter option.
* `p_milestone_fy` - _optional_ - Administrative or Judicial Milestone Fiscal Year Limiter.  Enter a single fiscal year value to limit milestone searches to a given fiscal year.
* `p_name` - _optional_ - Case Name Filter.  Enter one or more case names to restrict results.  Provide multiple values as a comma-delimited list.  When using this parameter the p_name_type parameter is required.
* `p_name_type` - _optional_ - Case Name Filter Modifier.
* `p_case_number` - _optional_ - Case Number Filter.  Enter one or more case numbers to restrict results.  Provide multiple values as a comma-delimited list.
* `p_docket_number` - _optional_ - DOJ Docket Number Filter.  Enter a single docket number or partial docket number to restrict results.  Use "%" as a wildcard for more complex filtering.
* `p_activity_number` - _optional_ - Case Activity Number Filter.  Enter a single case activity number to filter results.
* `p_case_lead` - _optional_ - Case Lead Limiter.  Enter E or S to limit results.
- E = EPA is the case lead.
- S = The state is the case lead.
    Possible values: E, S.
* `p_case_sens_flg` - _optional_ - Case Sensitive Data Flag.  Enter a Y or N to include or exclude cases with sensitive data.
* `p_region` - _optional_ - EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
    Possible values: 01, 02, 03, 04, 05, 06, 07, 08, 09, 10.
* `p_state` - _optional_ - Case Location State Filter.  Enter one or more state USPS postal codes to filter results.  Provide multiple values as a comma-delimited list.
* `p_district` - _optional_ - Case Location Court District Limiter.  Enter a single state court district code to limit results.
* `p_sic` - _optional_ - Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.
* `p_sic_ao_naics` - _optional_ - Case Location SIC/NAICS And/Or Modifier.  Enter either AND or OR to govern the search logic of SIC and NAICS codes.
- AND = Search will return results having both the provided SIC code(s) and provided NAICS code(s).
- OR = Search will return results having either the provided SIC code(s) or the provided NAICS code(s).
    Possible values: AND, OR.
* `p_sic_primary_flg` - _optional_ - Case Location Primary SIC Flag.  Enter Y to limit SIC search results to primary SIC codes only.
    Possible values: Y, N.
* `p_sic_frs_flg` - _optional_ - Case Location Extended FRS SIC Search Flag.  Enter Y to expand SIC search to include Federal Registry Service datasets.
    Possible values: Y, N.
* `p_naics` - _optional_ - North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values.
* `p_naics_primary_flg` - _optional_ - Case Location Primary NAICS Flag.  Enter Y to limit NAICS search results to primary NAICS codes only.
    Possible values: Y, N.
* `p_naics_frs_flg` - _optional_ - Case Location Extended FRS NAICS Search Flag.  Enter Y to expand NAICS search to include Federal Registry Service datasets.
    Possible values: Y, N.
* `p_enf_type` - _optional_ - Case Enforcement Type Filter. Enter one or more case enforcement type codes to limit results.  Provide multiple values as a comma-delimited list.
* `p_law` - _optional_ - Law Statute Code Filter.  Enter a single statute code to limit results.
* `p_section` - _optional_ - Law Section Code Filter. Enter one or more law section codes to limit results.  Provide multiple values as a comma-delimited list.
* `p_cp_citation` - _optional_ - Law Section Code Filter Alternative. Enter a single law section code to limit results.  This parameter accepts partial codes and allows for advanced search modifiers.
* `p_rank_order` - _optional_ - Law Status Rank Order Limiter.  Enter a single integer rank order to limit results.
    Possible values: 1, 0.
* `p_enf_program` - _optional_ - Enforcement Program Code Limiter.  Enter one or more enforcement program codes to limit results.  Provide multiple values as a comma-delimited list.  
* `p_violation` - _optional_ - Violation Type Code Filter.  Enter one or more violation type codes to limit results.  Provide multiple values as a comma-delimited list.
* `p_priority_area` - _optional_ - Case Priority Area Filter.  Enter one or more case priority areas to limit results.  Provide multiple values as a comma-delimited list.
* `p_priority_area_desc` - _optional_ - Case Priority Area Description Filter.  Enter a single case priority area description or partial case priority area description to limit results.  Use "%" as a wild-card match for more complex searches.
* `p_tribal` - _optional_ - Case Location Tribal Land Flag.  Enter Y or N to include or disallow cases on tribal land.
    Possible values: Y, N.
* `p_oeca_core` - _optional_ - OECA Core Program Flag.  Enter Y or N to include or exclude core program cases.
    Possible values: Y, N.
* `p_multimedia` - _optional_ - Enforcement Multimedia Case Flag.  Enter Y or N to include or exclude multimedia cases.
    Possible values: Y, N.
* `p_fed_case` - _optional_ - Federal Facility Involvement Flag.  Enter a Y or N to include or exclude cases involving federal facilities.
    Possible values: Y, N.
* `p_activity_contact` - _optional_ - Activity Contact Last Name Filter.  Enter a single last name or partial last name to filter results.  Use "%" as a wild-card for advanced searching.
* `p_role` - _optional_ - Activity Contact Role Code Filter.  Enter a single role code to restrict results.
* `p_fed_penalty` - _optional_ - Federal Penalty Assessed Amount Filter.  Provide one of the following keywords to restrict results.
- ANY = cases with any penalty amount.
- LE5000 = cases with penalty amount less than or equal to $5,000.
- GT5000 = cases with penalty amount more than $5,000.
- GT50000 = cases with penalty amount more than $50,000.
- GT100000 = cases with penalty amount more than $100,000.
- GT500000 = cases with penalty amount more than $500,000.
- GT1000000 = cases with penalty amount more than $1,000,000.
- GT2500000 = cases with penalty amount more than $2,500,000.
    Possible values: ANY, LE5000, GT5000, GT50000, GT100000, GT500000, GT1000000, GT2500000.
* `p_total_fed_penalty` - _optional_ - Total Federal Penalty Limiter.  Enter a keyword value to limit results to cases with given total federal penalties.
- ANY = Cases with any federal penalty greater than zero.
- LEXX = Replacing XX with a dollar value, return cases with federal penalty less than or equal to the given amount.
- GTXX = Replacing XX with a dollar value, return cases with federal penalty greater than the given amount.
* `p_cost_recovery` - _optional_ - Cost Recovery Awarded Amount Limiter.  Enter a keyword value to limit results to cases with given cost recovery amounts.
- ANY = Cases with any cost recovery amount greater than zero.
- LEXX = Replacing XX with a dollar value, return cases with cost recovery amount less than or equal to the given amount.
- GTXX = Replacing XX with a dollar value, return cases with cost recovery amount greater than the given amount.
* `p_total_cost_recovery` - _optional_ - Total Cost Recovery Amount Limiter.  Enter a keyword value to limit results to cases with given cost recovery amounts.
- ANY = Cases with any cost recovery amount greater than zero.
- LEXX = Replacing XX with a dollar value, return cases with cost recovery amount less than or equal to the given amount.
- GTXX = Replacing XX with a dollar value, return cases with cost recovery amount greater than the given amount.
* `p_complying_actions` - _optional_ - Complying Actions Type Code Limiter.  Enter one or more complying action codes to restrict results.  Provide multiple values as a comma-delimited list.
* `p_comp_act_val` - _optional_ - Compliance Action Cost Limiter. Enter a keyword value to limit results to cases with given compliance cost amounts.
- ANY = Cases with any compliance cost amount greater than zero.
- LEXX = Replacing XX with a dollar value, return cases with compliance cost amount less than or equal to the given amount.
- GTXX = Replacing XX with a dollar value, return cases with compliance cost amount greater than the given amount.
    Possible values: ANY, LE5000, GT5000, GT100000, GT1000000, GT50000000.
* `p_total_comp_act_val` - _optional_ - Total Compliance Action Amount Limiter.  Enter a keyword value to limit results to cases with given total compliance action amounts.
- ANY = Cases with any total compliance action amount greater than zero.
- LEXX = Replacing XX with a dollar value, return cases with total compliance action amount less than or equal to the given amount.
- GTXX = Replacing XX with a dollar value, return cases with total compliance action amount greater than the given amount.
* `p_sep_cats` - _optional_ - Supplemental Environmental Projects Activity Category Code Limiter.  Provide one or more SEP activity category codes to limit results.  Provide multiple values as a comma-delimited list.
* `p_sep_val` - _optional_ - Supplemental Environmental Projects Activity Value Limiter.  Provide a keyword to limit results.
- ANY = return cases with any SEP activity amount.
- LE10000 = return cases with SEP activity amount less than or equal to $10,000.
- GT10000 = return cases with SEP activity amount greater than $10,000.
- GT50000 = return cases with SEP activity amount greater than $50,000.
- GT100000 = return cases with SEP activity amount greater than $100,000.
- GT500000 = return cases with SEP activity amount greater than $500,000.
- GT1000000 = return cases with SEP activity amount greater than $1,000,000.
    Possible values: ANY, LE10000, GT10000, GT50000, GT100000, GT500000, GT1000000.
* `p_total_sep_val` - _optional_ - Supplemental Environmental Projects Total Value Limiter.  Provide a keyword to limit results.
- ANY = return cases with any SEP total amount.
- LE10000 = return cases with SEP total amount less than or equal to $10,000.
- GT10000 = return cases with SEP total amount greater than $10,000.
- GT50000 = return cases with SEP total amount greater than $50,000.
- GT100000 = return cases with SEP total amount greater than $100,000.
- GT500000 = return cases with SEP total amount greater than $500,000.
- GT1000000 = return cases with SEP total amount greater than $1,000,000.
* `p_lodged_date` - _optional_ - Settlement Lodged Date Limiter.  Enter a single settlement lodged date in MM/DD/YYYY format to limit results.
* `p_entered_date` - _optional_ - Settlement Entered Date Limiter.  Enter a single settlement entered date in MM/DD/YYYY format to limit results.
* `p_facility_id` - _optional_ - Case Facility Registration Identifier Limiter.  Enter a single complete facility identifier to limit results.
* `p_fac_city` - _optional_ - Case Facility City Limiter.  Enter a single complete city name to filter cases by facility location city.
* `p_fac_zip` - _optional_ - Case Facility ZIP Code Limiter.  Enter a single 5-digit zip code to filter cases by facility location zip code.
* `p_fac_county` - _optional_ - Case Facility County Limiter.  Enter a single complete county name to filter cases by facility location county name.
* `p_case_summary` - _optional_ - Case Summary Search Limiter.  Enter a single case summary to limit results.  This parameter accepts partial codes and allows for advanced search modifiers.
* `p_case_summary_type` - _optional_ - Identifies how the the search terms enterened in p_case_summary are searched.  Valid values are ALL (Default), WITHIN, and CONTAINS.  Must be used with p_case_summary.
    Possible values: ALL, CONTAINS, WITHIN.
* `p_usmex` - _optional_ - US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.
    Possible values: Y, N.
* `p_c1lat` - _optional_ - In decimal degrees.  Latitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `p_c1lon` - _optional_ - In decimal degrees.  Longitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `p_c2lat` - _optional_ - In decimal degrees.  Latitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `p_c2lon` - _optional_ - In decimal degrees.  Longitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `p_voluntary` - _optional_ - Voluntary Self Disclosure Flag.  Enter Y or N to include or exclude cases results having voluntary disclosure.
* `p_fed_indicator` - _optional_ - Federal Facility/Cross Media Flag.  Enter Y or N to limit results to cases with federal facility cross media.
* `p_fntype` - _optional_ - Controls type of text search performed on facility name with parameter p_fn.
- EXACT = Find facilities having the exact provided name(s).
- BEGINS = Find facilities with names starting with the provided term(s).
- ALL = Find facilities using Oracle text search terms.
- CONTAINS = 
    Possible values: ALL, CONTAINS, EXACT, BEGINS.
* `p_civil_criminal_indicator` - _optional_ - Civil/Criminal Case Limiter.  Provide a keyword to limit results.
- ANY = return both civil and criminal cases.
- CI = return only civil cases.
- CR = return only criminal cases.
    Possible values: CI, CR, ALL.
* `queryset` - _optional_ - Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
* `responseset` - _optional_ - Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
* `mapset` - _optional_ - Identifies the maxium number of case facilities to return from the case_rest_services.get_case_info query.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `qcolumns` - _optional_ - Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
* `p_pretty_print` - _optional_ - Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.
* `p_ocmap_fy` - _optional_ - Fiscal Year to select cases that are displayed in the Office of Complicance Fiscal Year Map Services

### Enforcement Case Search (new version)

> The get_case_info service end point searches for civil enforcement and criminal cases based on the provided selection criteria and returns either individual cases or clusters of case facility locations.

*Tags:* `Case Enforcement`

### Enforcement Case Summary Report Search

> The get_case_report service endpoint returns a complex object of civil enforcement case details based on the provided case id.

*Tags:* `Case Enforcement`

#### Input Parameters
* `p_id` - _optional_ - Case Number. Enter the case number identifier to retrieve the case report.
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### Enforcement Case Summary Report Search

> The get_case_report service endpoint returns a complex object of civil enforcement case details based on the provided case id.

*Tags:* `Case Enforcement`

### Enforcement Case Search

> The get_cases service end point searches for civil enforcement and criminal cases based on the provided selection criteria.

*Tags:* `Case Enforcement`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `p_case_category` - _optional_ - Case Category Filter.  Enter one or more case category codes to filter results.   Provide multiple values as a comma-delimited list.
- AFR = Administrative - Formal
- AIF = Administrative - Informal
- JDC = Judicial
* `p_case_status` - _optional_ - Case Status Code Filter.  Enter one or more case status codes to limit results.  Provide multiple values as a comma-delimited list.
* `p_milestone` - _optional_ - Administrative or Judicial Milestone Filter.  Enter one or milestone values to restrict results.  Provide multiple values as a comma-delimited list.
* `p_from_date` - _optional_ - Administrative or Judicial Milestone Date Range Start Limiter.  Enter a date value in MM/DD/YYYY format to limit milestone results.  Parameter p_to_date must also be populated when using this parameter option.
* `p_to_date` - _optional_ - Administrative or Judicial Milestone Date Range End Limiter.  Enter a date value in MM/DD/YYYY format to limit milestone results.  Parameter p_from_date must also be populated when using this parameter option.
* `p_milestone_fy` - _optional_ - Administrative or Judicial Milestone Fiscal Year Limiter.  Enter a single fiscal year value to limit milestone searches to a given fiscal year.
* `p_name` - _optional_ - Case Name Filter.  Enter one or more case names to restrict results.  Provide multiple values as a comma-delimited list.  When using this parameter the p_name_type parameter is required.
* `p_name_type` - _optional_ - Case Name Filter Modifier.
* `p_case_number` - _optional_ - Case Number Filter.  Enter one or more case numbers to restrict results.  Provide multiple values as a comma-delimited list.
* `p_docket_number` - _optional_ - DOJ Docket Number Filter.  Enter a single docket number or partial docket number to restrict results.  Use "%" as a wildcard for more complex filtering.
* `p_activity_number` - _optional_ - Case Activity Number Filter.  Enter a single case activity number to filter results.
* `p_case_lead` - _optional_ - Case Lead Limiter.  Enter E or S to limit results.
- E = EPA is the case lead.
- S = The state is the case lead.
    Possible values: E, S.
* `p_case_sens_flg` - _optional_ - Case Sensitive Data Flag.  Enter a Y or N to include or exclude cases with sensitive data.
* `p_region` - _optional_ - EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
    Possible values: 01, 02, 03, 04, 05, 06, 07, 08, 09, 10.
* `p_state` - _optional_ - Case Location State Filter.  Enter one or more state USPS postal codes to filter results.  Provide multiple values as a comma-delimited list.
* `p_district` - _optional_ - Case Location Court District Limiter.  Enter a single state court district code to limit results.
* `p_sic` - _optional_ - Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.
* `p_sic_ao_naics` - _optional_ - Case Location SIC/NAICS And/Or Modifier.  Enter either AND or OR to govern the search logic of SIC and NAICS codes.
- AND = Search will return results having both the provided SIC code(s) and provided NAICS code(s).
- OR = Search will return results having either the provided SIC code(s) or the provided NAICS code(s).
    Possible values: AND, OR.
* `p_sic_primary_flg` - _optional_ - Case Location Primary SIC Flag.  Enter Y to limit SIC search results to primary SIC codes only.
    Possible values: Y, N.
* `p_sic_frs_flg` - _optional_ - Case Location Extended FRS SIC Search Flag.  Enter Y to expand SIC search to include Federal Registry Service datasets.
    Possible values: Y, N.
* `p_naics` - _optional_ - North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values.
* `p_naics_primary_flg` - _optional_ - Case Location Primary NAICS Flag.  Enter Y to limit NAICS search results to primary NAICS codes only.
    Possible values: Y, N.
* `p_naics_frs_flg` - _optional_ - Case Location Extended FRS NAICS Search Flag.  Enter Y to expand NAICS search to include Federal Registry Service datasets.
    Possible values: Y, N.
* `p_enf_type` - _optional_ - Case Enforcement Type Filter. Enter one or more case enforcement type codes to limit results.  Provide multiple values as a comma-delimited list.
* `p_law` - _optional_ - Law Statute Code Filter.  Enter a single statute code to limit results.
* `p_section` - _optional_ - Law Section Code Filter. Enter one or more law section codes to limit results.  Provide multiple values as a comma-delimited list.
* `p_cp_citation` - _optional_ - Law Section Code Filter Alternative. Enter a single law section code to limit results.  This parameter accepts partial codes and allows for advanced search modifiers.
* `p_rank_order` - _optional_ - Law Status Rank Order Limiter.  Enter a single integer rank order to limit results.
    Possible values: 1, 0.
* `p_enf_program` - _optional_ - Enforcement Program Code Limiter.  Enter one or more enforcement program codes to limit results.  Provide multiple values as a comma-delimited list.  
* `p_violation` - _optional_ - Violation Type Code Filter.  Enter one or more violation type codes to limit results.  Provide multiple values as a comma-delimited list.
* `p_priority_area` - _optional_ - Case Priority Area Filter.  Enter one or more case priority areas to limit results.  Provide multiple values as a comma-delimited list.
* `p_priority_area_desc` - _optional_ - Case Priority Area Description Filter.  Enter a single case priority area description or partial case priority area description to limit results.  Use "%" as a wild-card match for more complex searches.
* `p_tribal` - _optional_ - Case Location Tribal Land Flag.  Enter Y or N to include or disallow cases on tribal land.
    Possible values: Y, N.
* `p_oeca_core` - _optional_ - OECA Core Program Flag.  Enter Y or N to include or exclude core program cases.
    Possible values: Y, N.
* `p_multimedia` - _optional_ - Enforcement Multimedia Case Flag.  Enter Y or N to include or exclude multimedia cases.
    Possible values: Y, N.
* `p_fed_case` - _optional_ - Federal Facility Involvement Flag.  Enter a Y or N to include or exclude cases involving federal facilities.
    Possible values: Y, N.
* `p_activity_contact` - _optional_ - Activity Contact Last Name Filter.  Enter a single last name or partial last name to filter results.  Use "%" as a wild-card for advanced searching.
* `p_role` - _optional_ - Activity Contact Role Code Filter.  Enter a single role code to restrict results.
* `p_fed_penalty` - _optional_ - Federal Penalty Assessed Amount Filter.  Provide one of the following keywords to restrict results.
- ANY = cases with any penalty amount.
- LE5000 = cases with penalty amount less than or equal to $5,000.
- GT5000 = cases with penalty amount more than $5,000.
- GT50000 = cases with penalty amount more than $50,000.
- GT100000 = cases with penalty amount more than $100,000.
- GT500000 = cases with penalty amount more than $500,000.
- GT1000000 = cases with penalty amount more than $1,000,000.
- GT2500000 = cases with penalty amount more than $2,500,000.
    Possible values: ANY, LE5000, GT5000, GT50000, GT100000, GT500000, GT1000000, GT2500000.
* `p_total_fed_penalty` - _optional_ - Total Federal Penalty Limiter.  Enter a keyword value to limit results to cases with given total federal penalties.
- ANY = Cases with any federal penalty greater than zero.
- LEXX = Replacing XX with a dollar value, return cases with federal penalty less than or equal to the given amount.
- GTXX = Replacing XX with a dollar value, return cases with federal penalty greater than the given amount.
* `p_cost_recovery` - _optional_ - Cost Recovery Awarded Amount Limiter.  Enter a keyword value to limit results to cases with given cost recovery amounts.
- ANY = Cases with any cost recovery amount greater than zero.
- LEXX = Replacing XX with a dollar value, return cases with cost recovery amount less than or equal to the given amount.
- GTXX = Replacing XX with a dollar value, return cases with cost recovery amount greater than the given amount.
* `p_total_cost_recovery` - _optional_ - Total Cost Recovery Amount Limiter.  Enter a keyword value to limit results to cases with given cost recovery amounts.
- ANY = Cases with any cost recovery amount greater than zero.
- LEXX = Replacing XX with a dollar value, return cases with cost recovery amount less than or equal to the given amount.
- GTXX = Replacing XX with a dollar value, return cases with cost recovery amount greater than the given amount.
* `p_complying_actions` - _optional_ - Complying Actions Type Code Limiter.  Enter one or more complying action codes to restrict results.  Provide multiple values as a comma-delimited list.
* `p_comp_act_val` - _optional_ - Compliance Action Cost Limiter. Enter a keyword value to limit results to cases with given compliance cost amounts.
- ANY = Cases with any compliance cost amount greater than zero.
- LEXX = Replacing XX with a dollar value, return cases with compliance cost amount less than or equal to the given amount.
- GTXX = Replacing XX with a dollar value, return cases with compliance cost amount greater than the given amount.
    Possible values: ANY, LE5000, GT5000, GT100000, GT1000000, GT50000000.
* `p_total_comp_act_val` - _optional_ - Total Compliance Action Amount Limiter.  Enter a keyword value to limit results to cases with given total compliance action amounts.
- ANY = Cases with any total compliance action amount greater than zero.
- LEXX = Replacing XX with a dollar value, return cases with total compliance action amount less than or equal to the given amount.
- GTXX = Replacing XX with a dollar value, return cases with total compliance action amount greater than the given amount.
* `p_sep_cats` - _optional_ - Supplemental Environmental Projects Activity Category Code Limiter.  Provide one or more SEP activity category codes to limit results.  Provide multiple values as a comma-delimited list.
* `p_sep_val` - _optional_ - Supplemental Environmental Projects Activity Value Limiter.  Provide a keyword to limit results.
- ANY = return cases with any SEP activity amount.
- LE10000 = return cases with SEP activity amount less than or equal to $10,000.
- GT10000 = return cases with SEP activity amount greater than $10,000.
- GT50000 = return cases with SEP activity amount greater than $50,000.
- GT100000 = return cases with SEP activity amount greater than $100,000.
- GT500000 = return cases with SEP activity amount greater than $500,000.
- GT1000000 = return cases with SEP activity amount greater than $1,000,000.
    Possible values: ANY, LE10000, GT10000, GT50000, GT100000, GT500000, GT1000000.
* `p_total_sep_val` - _optional_ - Supplemental Environmental Projects Total Value Limiter.  Provide a keyword to limit results.
- ANY = return cases with any SEP total amount.
- LE10000 = return cases with SEP total amount less than or equal to $10,000.
- GT10000 = return cases with SEP total amount greater than $10,000.
- GT50000 = return cases with SEP total amount greater than $50,000.
- GT100000 = return cases with SEP total amount greater than $100,000.
- GT500000 = return cases with SEP total amount greater than $500,000.
- GT1000000 = return cases with SEP total amount greater than $1,000,000.
* `p_lodged_date` - _optional_ - Settlement Lodged Date Limiter.  Enter a single settlement lodged date in MM/DD/YYYY format to limit results.
* `p_entered_date` - _optional_ - Settlement Entered Date Limiter.  Enter a single settlement entered date in MM/DD/YYYY format to limit results.
* `p_facility_id` - _optional_ - Case Facility Registration Identifier Limiter.  Enter a single complete facility identifier to limit results.
* `p_fac_city` - _optional_ - Case Facility City Limiter.  Enter a single complete city name to filter cases by facility location city.
* `p_fac_zip` - _optional_ - Case Facility ZIP Code Limiter.  Enter a single 5-digit zip code to filter cases by facility location zip code.
* `p_fac_county` - _optional_ - Case Facility County Limiter.  Enter a single complete county name to filter cases by facility location county name.
* `p_case_summary` - _optional_ - Case Summary Search Limiter.  Enter a single case summary to limit results.  This parameter accepts partial codes and allows for advanced search modifiers.
* `p_case_summary_type` - _optional_ - Identifies how the the search terms enterened in p_case_summary are searched.  Valid values are ALL (Default), WITHIN, and CONTAINS.  Must be used with p_case_summary.
    Possible values: ALL, CONTAINS, WITHIN.
* `p_usmex` - _optional_ - US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.
    Possible values: Y, N.
* `p_c1lat` - _optional_ - In decimal degrees.  Latitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `p_c1lon` - _optional_ - In decimal degrees.  Longitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `p_c2lat` - _optional_ - In decimal degrees.  Latitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `p_c2lon` - _optional_ - In decimal degrees.  Longitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `p_voluntary` - _optional_ - Voluntary Self Disclosure Flag.  Enter Y or N to include or exclude cases results having voluntary disclosure.
* `p_fed_indicator` - _optional_ - Federal Facility/Cross Media Flag.  Enter Y or N to limit results to cases with federal facility cross media.
* `p_fntype` - _optional_ - Controls type of text search performed on facility name with parameter p_fn.
- EXACT = Find facilities having the exact provided name(s).
- BEGINS = Find facilities with names starting with the provided term(s).
- ALL = Find facilities using Oracle text search terms.
- CONTAINS = 
    Possible values: ALL, CONTAINS, EXACT, BEGINS.
* `p_civil_criminal_indicator` - _optional_ - Civil/Criminal Case Limiter.  Provide a keyword to limit results.
- ANY = return both civil and criminal cases.
- CI = return only civil cases.
- CR = return only criminal cases.
    Possible values: CI, CR, ALL.
* `queryset` - _optional_ - Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
* `responseset` - _optional_ - Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
* `maplist` - _optional_ - Map List Flag.  Provide a Y to return mappable coordinates representing the full geographic extent of the queryset (all facilities that met the selection criteria).
    Possible values: Y, N.
* `tablelist` - _optional_ - Table List Flag. Enter a Y to display the first page of facility results.
    Possible values: Y, N.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `qcolumns` - _optional_ - Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
* `p_ocmap_fy` - _optional_ - Fiscal Year to select cases that are displayed in the Office of Complicance Fiscal Year Map Services

### Enforcement Case Search

> The get_cases service end point searches for civil enforcement and criminal cases based on the provided selection criteria.

*Tags:* `Case Enforcement`

### Enforcement Criminal Case Summary Report Search

> The get_crcase_report service end point returns a complex object of criminal case detials based on the provided criminal case id.

*Tags:* `Case Enforcement`

#### Input Parameters
* `p_id` - _optional_ - Prosecution Summary Identifier. Enter the numeric prosecution summary identifier to retrieve the criminal case report.
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### Enforcement Criminal Case Summary Report Search

> The get_crcase_report service end point returns a complex object of criminal case detials based on the provided criminal case id.

*Tags:* `Case Enforcement`

### Enforcement Case Download Data Service

> Based on the QID obtained from a get_cases query, return a comma separated value (CSV) file of the cases found.

*Tags:* `Case Enforcement`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- CSV = Facility results formatted as comma delimited file download (default).
* `qid` - _required_ - Query ID Selector.  Enter the QueryID number from a previously run query.
* `qcolumns` - _optional_ - Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

### Enforcement Case Download Data Service

> Based on the QID obtained from a get_cases query, return a comma separated value (CSV) file of the cases found.

*Tags:* `Case Enforcement`

### Enforcement Case Map Service

> The purpose of the GET_MAP service is to display facility coordinates and facility clusters related to a get_cases query. Currently, the maximum number of coordinates returned is 500. GET_MAP performs automatic clustering at the state, county, and zip code levels to maximize the number of coordinates returned.

*Tags:* `Case Enforcement`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `qid` - _required_ - Query ID Selector.  Enter the QueryID number from a previously run query.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `tablelist` - _optional_ - Table List Flag. Enter a Y to display the first page of facility results.
    Possible values: Y, N.
* `c1_lat` - _optional_ - Latitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `c1_long` - _optional_ - Longitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `c2_lat` - _optional_ - Latitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* `c2_long` - _optional_ - Longitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.

### Enforcement Case Map Service

> The purpose of the GET_MAP service is to display facility coordinates and facility clusters related to a get_cases query. Currently, the maximum number of coordinates returned is 500. GET_MAP performs automatic clustering at the state, county, and zip code levels to maximize the number of coordinates returned.

*Tags:* `Case Enforcement`

### Enforcement Case Paginated Results Service

> GET_QID is passed with a query ID corresponding to a previously run get_cases query. It then returns a CASES object containing all matching cases. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns.

*Tags:* `Case Enforcement`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `qid` - _required_ - Query ID Selector.  Enter the QueryID number from a previously run query.
* `pageno` - _optional_ - Indicates the number of the page to display. It is used only when the results are paginated.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `newsort` - _optional_ - Output Sort Column.  Enter the number of the column on which the data will be sorted. If unpopulated results will sort on the first column.
* `descending` - _optional_ - Output Sort Column Descending Flag.  Enter Y to column identified in the newsort parameter descending.  Enter N to use ascending sort order. Used only when newsort parameter is populated.
    Possible values: Y, N.
* `qcolumns` - _optional_ - Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

### Enforcement Case Paginated Results Service

> GET_QID is passed with a query ID corresponding to a previously run get_cases query. It then returns a CASES object containing all matching cases. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns.

*Tags:* `Case Enforcement`

### Enforcement Case Metadata Service

> Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_cases endpoint.

*Tags:* `Metadata`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### Enforcement Case Metadata Service

> Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_cases endpoint.

*Tags:* `Metadata`

### ECHO ICIS Law Sections Lookup Service

> Returns the ICIS Law Section Descriptions.

*Tags:* `Lookups`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `statute_code` - _optional_
* `status_flag` - _optional_
* `search_term` - _optional_ - Enter a partial or complete search phrase or word.
* `search_code` - _optional_ - Enter a partial or complete code value.
* `sort_order` - _optional_

### ECHO ICIS Law Sections Lookup Service

> Returns the ICIS Law Section Descriptions.

*Tags:* `Lookups`

## License

**flow**ground :- Telekom iPaaS / epa-gov-case-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
