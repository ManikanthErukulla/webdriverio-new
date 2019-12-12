@test
Feature: Mortgage rates

  @mortgage
  Scenario: Navigate to mortgage rates
    Given user is on website
    When user navigate to mortgage section
    When user taps on mortgage rates link
    Then user is navigated to the mortgage rates page

  @mortgage
  Scenario Outline: Mortgage-change lender scenario
    Given user is navigated to the mortgage rates page
    When user answers do you have a mortgage as "<do_you_mortgage>"
    When user answers type of mortgage as "<mortgage_type>"
    When user answers the property value as "<property_value>"
    When user answers mortgage amount as "<mortgage_amt>"
    When user answers term as "<term>"
    When user taps on find a mortgage rate
    Then user sees we have mortgages for you message

    Examples:
    |do_you_mortgage|mortgage_type        |property_value|mortgage_amt|term|
    |No             |I'm changing lender  |300,000       |150,000     |30  |    

  @mortgage
  Scenario: Filter results
  When user sees we have mortgages for you message
  When user filters as Fixed rate
  When user filters as With fee
  Then filter results are shown

  @mortgage
  Scenario: User checks the 2 year fixed mortgage filter results
  Given 2 year fixed mortgage is shown
  Then user checks 2 yr Monthly payment
  Then user checks 2 yr Initial rate
  Then user checks 2 yr Product fee
  Then user checks 2 yr Overall cost for comparison
  Then user checks 2 yr Total paid over 2 years

  @mortgage
  Scenario: User checks the 3 year fixed mortgage filter results
  Given 3 year fixed mortgage is shown
  Then user checks 3 yr Monthly payment
  Then user checks 3 yr Initial rate
  Then user checks 3 yr Product fee
  Then user checks 3 yr Overall cost for comparison
  Then user checks 3 yr Total paid over 3 years

  @mortgage
  Scenario: User checks the 5 year fixed mortgage filter results
  Given 5 year fixed mortgage is shown
  Then user checks 5 yr Monthly payment
  Then user checks 5 yr Initial rate
  Then user checks 5 yr Product fee
  Then user checks 5 yr Overall cost for comparison
  Then user checks 5 yr Total paid over 5 years
    