# Hej!
Jag heter Anton, jag pluggar IT och gillar web.


# CSS
Jag ska prata om CSS idag!
Många av oss har någon form av hatkärlek till CSS.
På något vis har vi aldrig riktigt fått ett bra verktyg att jobba med.


# CSS är svårt!
Allt för ofta kännas det såhär.
På något vis gör friheten i CSS att det går att krångla till något oerhört.
Friheten är både en för- och en nackdel.


# Krånglig selector
Såhär kan CSS se ut. Det är inte så kul.
Människor skriver det här, och gnäller på att CSS är dåligt.


# .selector { ... }
Det här är CSS. Kan backa två steg och gå tillbaka till det här?
Ta ett djupt andetag och titta på det här. Se enkelheten.
Hur kan det här någosin bli krångligt?


# Layouts
- Tabeller: LAYOUT DIREKT I HTML
- Float: Mindre layout direkt i html
	- Ordning i markupen spelar roll.
	- Oförutsägbart?

- Flexbox: Ingen layout i html, FULL SEPARATION
	- Förutsägbart!


# TACK!
Till dom som uppfunnit flexbox: TACK!
Det hade inte skadat om det kom för 10 år sedan, men tack ändå.


# Vad kan man göra?
1. display: flex; på containern ger det här.

2. Vi kan centrera barnen vertikalt i förhållande till varandra

3. Vi kan sprida ut dem jämnt över hela bredden

4. Och vi kan vända på layouten och göra samma saker vertikalt.


# Ett mer avancerat exempel
Här är ett lite mer avancerat exempel på vad man kan göra.

En huvudvy med en artikel.
En responsiv sidomeny med andra artiklar.


# .container {
- display: flex;
- flex-directiom: column;
	- Åt vilket håll ska vi lägga ut barnen?
- flex-wrap: wrap;
	- Ska vi bryta om vi når förälderns bredd? Eller ska vi bara fortsätta?
- justify-content: space-between;
	- Hur ska barnen läggas ut längs main-axis?
- align-items: center;
	- Hur ska barnen läggas ut längs cross-axis?


# .item {
- flex-grow: 1;
	- Vilja att växa. Andel av totala grow-värdena.
- flex-shrink: 1;
	- Vilja att krympa. Andel av totala shrink-värdena.
- flex-basis: 500px;
	- Grundstorlek. Barnet strävar efter den här storleken.
- align-self: flex-end;
	- Bryt mönstret som är satt av align-items: center;
- order: -1;
	- Override markup-ordning. Lägst först.


# Webbläsarstödet?
- Som vanligt IE som släpar
- Opera Mini utan stöd. När kommer det?