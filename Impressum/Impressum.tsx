import { PiGreaterThanBold } from "react-icons/pi";
import { Link } from "react-router-dom";


const Impressum = () => {
    return (
        <div>
            <div className="w-full sm:w-[450px] mx-auto md:w-[550px] lg:w-[750px]">
                <div className="pt-2 font-sans">
                    <h1 className="text-center font-normal text-gray-800 text-6xl md:text-[68px]">IMPRESSUM</h1>
                    <div className="md:flex hidden justify-center items-center gap-5 mt-5">
                        <Link to="/" className="font-normal text-slate-500 text-xl hover:underline">Home</Link>
                        <PiGreaterThanBold className="size-3 text-slate-500" />
                        <span className="font-normal text-slate-500 text-lg">IMPRESSUM</span>
                    </div>

                    <div className="mt-10 ">
                        <h4 className="text-gray-500 font-semibold pb-1">Hammerstein Group GmbH</h4>
                        <h4 className="text-slate-400 pb-1"> Gewerbestrasse 5 <br />
                            6330 Cham <br />
                            Schweiz
                        </h4>
                        <p className="text-yellow-500 font-normal text-lg pb-1 pt-5"><span className="text-gray-700 font-normal text-lg">E-Mail:</span> info@hammerstein1870.group </p>
                        <p className="text-yellow-500 font-normal text-lg pb-1"><span className="text-gray-700 font-normal text-lg">Telefon:</span> +41793294444</p>
                        <p className="text-yellow-500 font-normal text-lg pb-5"><span className="text-gray-700 font-normal text-lg">Internet:</span> www.hammerstein1870.group</p>
                        <p className="text-slate-400">
                            <span className="text-gray-500 font-semibold text-lg pb-10">Vertretungsberechtigte Personen:</span><br />
                            Markus Breitenmoser von Hammerstein CEO</p>
                        <p className="text-slate-500 font-semibold text-lg">UID:<span className="text-slate-400 font-thin text-lg">CHE-341.951.265</span></p>
                        <p className="text-slate-500 font-semibold text-lg">MwSt-Nr.:<span className="text-slate-400 font-thin text-lg">CHE-341.951.265 MWST</span></p>
                        <p className="font-bold text-gray-800 text-4xl py-5">Datenschutzerklärung</p>
                        <p className="font-bold text-gray-800 text-4xl py-5">Was tun wir?</p>
                        <p className="font-medium text-lg text-gray-500 pb-5 pt-5">Hammerstein Group GmbH (Gewerbestrasse 5, 6330 Cham) betreibt die Website hammerstein1870.group (nachfolgend als «wir» bzw. «uns» bezeichnet). Auf dieser Webseite können Sie sich über unserer Organisation informieren, unsere Online-Services in Anspruch nehmen und mit uns in Kontakt treten.</p>
                        <p className="font-medium text-lg text-gray-500 pb-5">Der Schutz Ihrer persönlichen Daten ist uns ein grosses Anliegen. Wir informieren Sie in dieser Datenschutzerklärung transparent und verständlich darüber, welche Daten wir über unsere Website sammeln und wie wir damit umgehen.</p>
                        <p className="font-medium text-lg text-gray-500 pb-5">Aus diesem Grund verwenden wir die Icons des Vereins <Link to="/" className="text-yellow-500 font-normal text-lg hover:underline  pb-5">PRIVACY ICONS</Link>. Sie sollen Ihnen dabei helfen, sich rasch einen Überblick über die Verarbeitung Ihrer Daten durch uns zu verschaffen.</p>
                        <h4 className="font-bold text-gray-800 text-4xl py-5">Über was informieren wir?</h4>
                        <ul className="list-disc pl-5 text-gray-400 text-sm">
                            <li className="text-lg pb-1">Wer für die Datenverarbeitung verantwortlich ist;</li>
                            <li className=" text-lg pb-1">Welche Daten erhoben werden;</li>
                            <li className="text-lg pb-1">Zu welchem Zweck diese Daten erhoben werden;</li>
                            <li className="text-lg pb-1">An wen wir diese Daten weitergeben;</li>
                            <li className="text-lg pb-1">Wie Sie einer Datenverarbeitung widersprechen können;</li>
                            <li className="text-lg pb-5">Welche Rechte Sie haben und wie Sie diese geltend machen können.</li>
                        </ul>
                        <h4 className="font-bold text-gray-800 text-4xl pt-3 pb-5">Begriffsdefinitionen</h4>
                        <h4 className="font-bold text-gray-800 text-2xl pb-5">Was sind personenbezogene Daten?</h4>
                        <p className="text-lg pb-1 text-gray-500">Personenbezogene Daten (gleichbedeutend mit dem Begriff «Personendaten») sind alle Angaben, die sich auf eine bestimmte oder bestimmbare natürliche Person beziehen. Dazu gehören beispielsweise Name, Adresse, Geburtsdatum, E-Mail-Adresse oder Telefonnummer sowie die IP-Adresse. Auch Daten über persönliche Vorlieben wie Freizeitbeschäftigungen oder Mitgliedschaften zählen zu den personenbezogenen Daten.</p>
                        <h4 className="font-bold text-gray-800 text-2xl pb-5">Was sind besondere Kategorien personenbezogener <br /> Daten?</h4>
                        <p className="font-normal pb-1 text-gray-500">Besondere Kategorien personenbezogener Daten (gleichbedeutend mit dem Begriff «besonders schützenswerte Daten») sind:</p>
                        <ul className="list-disc pl-5 text-gray-400">
                            <li className="pb-1 font-normal">Daten über religiöse, weltanschauliche, politische oder gewerkschaftliche Ansichten oder Tätigkeiten;</li>
                            <li className="pb-1 font-normal">Daten über die Gesundheit, Intimsphäre, die Zugehörigkeit zu einer Rasse oder Ethnie, sowie zum Sexualleben und zur sexuellen Orientierung;</li>
                            <li className="pb-1 font-normal">Daten zu administrativen oder strafrechtlichen Verfolgungen und Sanktionen, sowie Daten über Massnahmen der sozialen Hilfe;</li>
                            <li className="pb-1 font-normal">Genetische Daten und biometrische Daten, die eine Person eindeutig identifizieren.</li>
                        </ul>
                        <p className="font-normal pb-1 text-gray-500 pt-2">Soweit erforderlich und Sie uns diese Daten selbst preisgeben, können wir Daten, die einer besonderen Kategorie von personenbezogenen Daten angehören, verarbeiten. In diesem Fall unterliegt deren Verarbeitung strengerer Vertraulichkeit.</p>
                        <h4 className="font-bold text-gray-800 text-2xl pb-5">Was ist das Verarbeiten von personenbezogenen Daten?</h4>
                        <p className="font-normal pb-1 text-gray-500 pt-2">Dies ist das Übermitteln oder Zugänglichmachen von personenbezogenen Daten, bspw. die Veröffentlichung oder die Offenbarung an einen Dritten.</p>
                        <h2 className="font-bold text-gray-800 text-4xl pb-5">Kontakt</h2>
                        <p className="font-normal text-gray-500 pb-2">Bei Fragen oder Anliegen zum Schutz Ihrer Daten durch uns, können Sie sich an unseren Datenschutzverantwortlichen wenden:</p>
                        <p className="font-normal text-gray-500 pb-1">Hammerstein Group GmbH <br />
                            Markus Breitenmoser von Hammerstein <br />
                            Gewerbestrasse 5 <br />
                            6330 Cham <br />
                            info@hammerstein1870.group</p>
                        <h2 className="font-bold text-gray-800 text-4xl pb-5">Datensicherheit</h2>
                        <p className="font-normal text-gray-500 pb-5">Wir werden Ihre Daten sicher aufbewahren und alle angemessenen Massnahmen ergreifen, um Ihre Daten vor Verlust, Zugriff, Missbrauch oder Änderungen zu schützen.</p>
                        <p className="font-normal text-gray-500 pb-5">Unsere Vertragspartner und Mitarbeitenden, die Zugang zu Ihren Daten haben, sind zur Einhaltung der datenschutzrechtlichen Bestimmungen verpflichtet. In manchen Fällen wird es im Rahmen der Auftragsverarbeitung erforderlich sein, dass wir Ihre Anfragen an mit uns verbundene Unternehmen weiterreichen. Auch in diesen Fällen werden Ihre Daten vertraulich behandelt.</p>
                        <p className="font-normal text-gray-500 pb-5">Innerhalb unserer Webseite verwenden wir das SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird.</p>
                        <h2 className="font-bold text-gray-800 text-4xl pb-5">Betroffenenrechte</h2>
                        <h4 className="font-bold text-gray-800 text-2xl pb-5">Auskunftsrecht</h4>
                        <p className="font-normal text-gray-500 pb-5">className="font-normal text-gray-500 pb-5"</p>
                        <p className="font-normal text-gray-500 pb-5">Die Auskunft erfolgt in schriftlicher oder auch in anderer Form, ggf. auch elektronisch. Sofern Sie dies verlangen, können wir Ihnen die Auskunft auch mündlich erteilen, sofern Sie Ihre Identität in anderer Form nachweisen. Stellen Sie den Auskunftsantrag elektronisch, stellen wir die Auskünfte in einem gängigen elektronischen Format zur Verfügung, sofern Sie nichts anderes angeben.</p>
                        <p className="font-normal text-gray-500 pb-5">Die Auskunft ist im Regelfall unentgeltlich. Werden darüber hinaus Kopien angefordert, kann ein angemessenes Entgelt verlangt werden.</p>
                        <p className="font-normal text-gray-500 pb-5">Das Recht eine Kopie über die verarbeiteten Daten zu erhalten, darf die Rechte und Freiheiten anderer Personen nicht beeinträchtigen.</p>
                        <p className="font-normal text-gray-500 pb-5">Im Falle von offensichtlich unbegründeten oder exzessiven Auskunftsanträgen behalten wir uns vor, die Auskunft im Rahmen der gesetzlichen Schranken zu verweigern oder ein angemessenes Entgelt dafür zu verlangen.</p>
                        <p className="font-normal text-gray-500 pb-5">Die Bearbeitung Ihres Gesuchs unterliegt der gesetzlichen Frist von 30 Tagen. Diese Frist dürfen wir aufgrund der Komplexität und der hohen Anzahl von Anfragen um zwei weitere Monate verlängern, soweit dies erforderlich ist. Sie werden über die Fristverlängerung innerhalb eines Monats nach dem Stellen des Auskunftsgesuch informiert. Zugleich werden Ihnen die Gründe für die Verlängerung genannt.</p>
                        <h4 className="font-bold text-gray-800 text-3xl pb-5">Löschung und Berichtigung</h4>
                        <p className="font-normal text-gray-500 pb-5">Sie haben jederzeit die Möglichkeit, die Löschung oder Berichtigung bzw. Vervollständigung Ihrer Daten zu verlangen, sofern keine gesetzlichen Aufbewahrungspflichten oder ein gesetzlicher Erlaubnistatbestand entgegenstehen.</p>
                        <p className="font-normal text-gray-500 pb-5">Bitte beachten Sie, dass die Ausübung Ihrer Rechte unter Umständen im Konflikt mit vertraglichen Vereinbarungen stehen und entsprechende Auswirkungen auf die Vertragsdurchführung haben kann (z.B. vorzeitige Vertragsauflösung oder Kostenfolgen).</p>
                        <h4 className="font-bold text-gray-800 text-3xl pb-5">Einschränkung der Bearbeitung</h4>
                        <p className="font-normal text-gray-500 pb-5">Sie haben ausserdem das Recht, eine Einschränkung der Verarbeitung zu verlangen, wenn Sie die Richtigkeit dieser Daten bestreiten, die Verarbeitung unrechtmässig ist, die Daten nicht länger benötigt werden oder Sie Widerspruch gegen die Verarbeitung erhoben haben.</p>
                        <p className="font-normal text-gray-500 pb-5">Wird die Verarbeitung der Daten eingeschränkt, dürfen diese nur noch gespeichert werden. Eine weitergehende Verarbeitung darf nur mit Ihrer Einwilligung, zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen, zum Schutz der Rechte einer anderen Person oder aus Gründen eines wichtigen öffentlichen Interesses erfolgen. Im Falle einer Aufhebung der Einschränkung werden Sie benachrichtigt.</p>
                        <h4 className="font-bold text-gray-800 text-3xl pb-5">Recht auf Datenherausgabe und -übertragung</h4>
                        <p className="font-normal text-gray-500 pb-5">Sie haben das Recht, Ihre Daten in einem gängigen Dateiformat zu erhalten oder (falls technisch umsetzbar) an einen Dritten übermitteln zu lassen, wenn wir Ihre Daten automatisiert verarbeiten, und wenn:</p>
                        <ul className="list-disc pl-5 text-gray-400 pb-5">
                            <li className="pb-1 font-normal">Sie Ihre Einwilligung für die Verarbeitung dieser Daten erteilt haben; oder</li>
                            <li className="pb-1 font-normal">Sie Daten im Zusammenhang mit dem Abschluss oder der Abwicklung eines Vertrags bekannt gegeben haben.</li>
                        </ul>
                        <h4 className="font-bold text-gray-800 text-3xl pb-5">Widerspruchsrecht</h4>
                        <p className="font-normal text-gray-500 pb-5">Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung inkl. Profiling, die auf der Basis unserer berechtigten Interessen erfolgt, Widerspruch einzulegen. Dieses Recht gilt auch für Verarbeitungen zum Zwecke der Direktwerbung.</p>
                        <h4 className="font-bold text-gray-800 text-3xl pb-5">Rechtsweg</h4>
                        <p className="font-normal text-gray-500 pb-5">Sie Sind Sie von der Verarbeitung personenbezogener Daten betroffen, haben Sie das Recht, Ihre Rechte gerichtlich durchzusetzen oder bei der zuständigen Aufsichtsbehörde eine Beschwerde einzureichen. Die zuständige Aufsichtsbehörde in der Schweiz ist der <Link to="/" className="text-yellow-500 font-normal text-lg hover:underline pb-1">Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte</Link> </p>
                        <h2 className="font-bold text-gray-800 text-2xl pb-5">Datenverarbeitungen im Allgemeinen</h2>
                        <h4 className="font-bold text-gray-800 text-3xl pb-5">Welche Daten verarbeiten wir von Ihnen und von wem erhalten wir diese Daten?</h4>
                        <p className="font-normal text-gray-500 pb-5">In erster Linie verarbeiten wir personenbezogene Daten, die Sie uns übermitteln oder die wir beim Betrieb unserer Website erheben. Unter Umständen erhalten wir personenbezogene Daten über Sie auch von Dritten. Das können folgende Kategorien sein:</p>
                        <ul className="list-disc pl-5 text-gray-400 pb-5">
                            <li className="pb-1 font-normal">Personenstammdaten (Name, Adresse, Geburtsdaten, etc.);</li>
                            <li className="pb-1 font-normal">Kontaktdaten (Handynummer, E-Mailadresse, etc.);</li>
                            <li className="pb-1 font-normal">Finanzdaten (bspw. Kontoangaben);</li>
                            <li className="pb-1 font-normal">Onlinekennungen (bspw. Cookie-Kennung, IP-Adressen);</li>
                        </ul>
                        <p className="font-normal text-gray-500 pb-5">Diese Daten können aus den folgenden Quellen stammen:</p>
                        <ul className="list-disc pl-5 text-gray-400 pb-5">
                            <li className="pb-1 font-normal">Angaben aus öffentlich zugänglichen Quellen (z.B. Medien, Internet);</li>
                            <li className="pb-1 font-normal">Angaben aus öffentlichen Registern (z.B. Handelsregister, Betreibungsregister, Grundbuch);</li>
                            <li className="pb-1 font-normal">Angaben im Zusammenhang mit behördlichen oder gerichtlichen Verfahren;</li>
                            <li className="pb-1 font-normal">Angaben betreffend Ihrer beruflichen Funktionen und Aktivitäten (bspw. berufliche Netzwerke);</li>
                            <li className="pb-1 font-normal">Angaben über Sie in Korrespondenz und Besprechungen mit Dritten;</li>
                            <li className="pb-1 font-normal">Bonitätsauskünfte (soweit wir mit Ihnen persönliche Geschäfte abwickeln);</li>
                            <li className="pb-1 font-normal">Angaben über Sie, die uns Personen aus Ihrem Umfeld geben, damit wir Verträge mit Ihnen abschliessen oder abwickeln können;</li>
                            <li className="pb-1 font-normal">Daten im Zusammenhang mit der Benutzung der Webseite.</li>
                        </ul>

                        <h4 className="font-bold text-gray-800 text-3xl pb-5">Unter welchen Voraussetzungen verarbeiten wir Ihre Daten?</h4>
                        <p className="font-normal text-gray-500 pb-5">Wir verarbeiten Ihre Daten nach Treu und Glauben und nach den in dieser Datenschutzerklärung festgelegten Zwecken. Wir achten dabei auf eine transparente und verhältnismässige Verarbeitung.</p>
                        <p className="font-normal text-gray-500 pb-5">Sollten wir diese Grundsätze ausnahmsweise nicht einhalten können, kann die Datenverarbeitung trotzdem rechtmässig sein, weil ein Rechtfertigungsgrund vorliegt. Als Rechtfertigungsgrund kommt namentlich in Frage:</p>
                        <ul className="list-disc pl-5 text-gray-400 pb-5">
                            <li className="pb-1 font-normal">hre Einwilligung;</li>
                            <li className="pb-1 font-normal">die Durchführung eines Vertrages oder vorvertraglicher Massnahmen;</li>
                            <li className="pb-1 font-normal">die Erfüllung gesetzlicher Vorschriften;</li>
                            <li className="pb-1 font-normal">unsere berechtigten Interessen, sofern Ihre Interessen nicht überwiegen.</li>
                        </ul>

                        <p className="font-normal text-gray-500 pb-5">Unter Umständen sind Sie verpflichtet, uns gewisse personenbezogene Daten bekanntzugeben, damit wir miteinander geschäftliche Beziehungen anbahnen können. Ohne solche Daten sind wir normalerweise nicht in der Lage, einen Vertrag abzuwickeln. Die Webseite kann im Normalfall ebenfalls nicht genutzt werden, wenn gewisse Angaben zur Sicherstellung des Datenverkehrs, wie Ihre IP-Adresse, nicht offengelegt werden.</p>
                        <h4 className="font-bold text-gray-800 text-3xl pb-5">Wie können Sie eine erteilte Einwilligung widerrufen?</h4>
                        <p className="font-normal text-gray-500 pb-5">Haben Sie uns eine Einwilligung zur Verarbeitung Ihrer personenbezogenen Daten für bestimmte Zwecke erteilt, verarbeiten wir Ihre Daten im Rahmen dieser Einwilligung, soweit wir keinen anderen Rechtfertigungsgrund haben bzw. kein anderer Erlaubnistatbestand erfüllt ist.</p>
                        <p className="font-normal text-gray-500 pb-5">Sie können Ihre erteilte Einwilligung für die Zukunft jederzeit widerrufen und eine E-Mail an die im Impressum genannte Adresse schicken. Bereits erfolgte Datenverarbeitungen sind von dem Widerruf nicht betroffen und behalten ihre Gültigkeit.</p>
                        <h4 className="font-bold text-gray-800 text-3xl pb-5">In welchen Fällen geben wir Ihre Daten an Dritte weiter?</h4>
                        <h4 className="font-semibold text-gray-800 text-2xl pb-5">a. Grundsatz</h4>
                        <p className="font-normal text-gray-500 pb-5">Wir sind unter Umständen darauf angewiesen, die Dienste Dritter oder von verbundenen Unternehmen in Anspruch zu nehmen und diese mit der Verarbeitung Ihrer Daten zu beauftragen (sog. Auftragsverarbeiter). Kategorien der Empfänger sind namentlich:</p>
                        <ul className="list-disc pl-5 text-gray-400 pb-5">
                            <li className="pb-1 font-normal">Buchhaltung, Treuhand und Revisionsunternehmens;</li>
                            <li className="pb-1 font-normal">Beratungsunternehmen (Rechtsberatung, Steuern, etc.);</li>
                            <li className="pb-1 font-normal">IT-Dienstleister (Webhosting, Support, Clouddienste, Webseitengestaltung, etc.);</li>
                            <li className="pb-1 font-normal">Zahlungsdienstleister (ausschließlich nach Ihrer vorherigen Zustimmung);</li>
                            <li className="pb-1 font-normal">Anbieter von Tracking-, Conversion- und Werbedienstleistungen.</li>
                        </ul>
                        <p className="font-normal text-gray-500 pb-5">Wir stellen sicher, dass eine Weitergabe der Daten nur mit Ihrer ausdrücklichen Einwilligung erfolgt, sofern es sich dabei um keine Auftragsdatenverarbeitung handelt. Zudem stellen wir sicher, dass diese Dritten und unsere verbundenen Unternehmen die Voraussetzungen des Datenschutzes einhalten und Ihre personenbezogenen Daten vertraulich behandeln. Unter Umständen sind wir auch verpflichtet, Ihre personenbezogenen Daten an Behörden bekanntzugeben.</p>
                        <h4 className="font-semibold text-gray-800 text-2xl pb-5">b. Weitergabe an Partner und Kooperationsunternehmen</h4>
                        <p className="font-normal text-gray-500 pb-5">Wir arbeiten teils mit unterschiedlichen Unternehmen und Partnern zusammen, die Ihre Angebote auf unserer Website aufschalten. Es ist für Sie erkennbar, dass es sich um ein Drittangebot (als «Werbung» gekennzeichnet) handelt.</p>
                        <p className="font-normal text-gray-500 pb-5">Wenn Sie ein solches Angebot in Anspruch nehmen, übermitteln wir Ihre personenbezogenen Daten an den entsprechenden Partner oder das Kooperationsunternehmen (z.B. Name, Funktion, Kommunikation etc.), dessen Angebot Sie wahrnehmen wollen, sofern Sie darin zuvor ausdrücklich eingewilligt haben. Diese Partner und Kooperationsunternehmen sind eigenständig für die empfangenen personenbezogenen Daten verantwortlich. Nach der Übermittlung der Daten gelten die Datenschutzbestimmungen des jeweiligen Partners.</p>
                        <h4 className="font-semibold text-gray-800 text-2xl pb-5">c. Weitergabe ins Ausland</h4>
                        <p className="font-normal text-gray-500 pb-5">Unter Umständen kann es im Rahmen der Auftragsverarbeitung zu Übermittlung Ihrer personenbezogenen Daten an Unternehmen im Ausland kommen. Diese Unternehmen sind im gleichen Umfang zum Datenschutz verpflichtet, wie wir selbst. Die Übermittlung kann weltweit stattfinden.</p>
                        <p className="font-normal text-gray-500 pb-5">Entspricht das Datenschutzniveau nicht demjenigen des der Schweiz, so nehmen wir eine vorgängige Risikoeinschätzung vor und stellen vertraglich sicher, dass der gleiche Schutz wie in der Schweiz garantiert wird (bspw. mittels der neuen Standardvertragsklauseln der EU-Kommission oder anderen, gesetzlich vorgegebenen Massnahmen). Sollte unsere Risikoeinschätzung negativ ausfallen, ergreifen wir zusätzliche technische Massnahmen zum Schutz Ihrer Daten. Sie können die Standardvertragsklauseln der EU-Kommission abrufen unter folgendem <Link to="/" className="text-yellow-500 font-normal text-lg pb-1 hover:underline">Link</Link>.</p>
                        <h4 className="font-bold text-gray-800 text-3xl pb-5">Wie lange bewahren wir Ihre Daten auf?</h4>
                        <p className="font-normal text-gray-500 pb-5">Wir speichern personenbezogene Daten nur so lange, wie dies erforderlich ist, um die einzelnen Zwecke, zu denen die Daten erhoben wurden, zu erfüllen.</p>
                        <p className="font-normal text-gray-500 pb-5">Vertragsdaten speichern wir länger, da wir dazu durch gesetzliche Vorschriften verpflichtet sind. Wir müssen insbesondere geschäftliche Kommunikation, geschlossene Verträge und Buchungsbelege bis zu 10 Jahren aufbewahren. Soweit wir solche Daten von Ihnen nicht mehr zur Durchführung der Dienstleistungen benötigen, werden die Daten für die weitere Verarbeitung eingeschränkt und wir verwenden diese nur noch für Zwecke der Rechnungslegung und für Steuerzwecke.</p>
                        <h2 className="font-semibold text-gray-800 text-4xl pb-5">Datenverarbeitungen im Einzelnen</h2>
                        <h3 className="font-semibold text-gray-800 text-3xl pb-5">Bereitstellen der Webseite und Erstellung von Logfiles</h3>
                        <p className="font-normal text-gray-500 pb-5">Indem Sie hammerstein1870.group lediglich besuchen, sich also nicht registrieren oder anderweitige Informationen preisgeben, werden nur die Daten erhoben, die Ihr Browser an unseren Server automatisiert übermittelt. Die Daten sind für den Betrieb der Website technisch erforderlich.</p>
                        <p className="font-normal text-gray-700 pb-5">Welche Daten verarbeiten wir?</p>
                        <p className="font-normal text-gray-500 pb-5">Zur Bereitstellung der Webseite und bei der Erstellung von Logfiles werden insbesondere folgende Daten bearbeitet:</p>
                        <ul className="list-disc pl-5 text-gray-400 pb-5">
                            <li className="pb-1 font-normal">Name des Internetserviceproviders</li>
                            <li className="pb-1 font-normal">IP-Adresse</li>
                            <li className="pb-1 font-normal">Technische Informationen wie Browser, Betriebssystem oder Bildschirmauflösung</li>
                            <li className="pb-1 font-normal">das Datum und die Uhrzeit des Zugriffs</li>
                            <li className="pb-1 font-normal">Referrer-URL</li>
                        </ul>
                        <p className="font-normal text-gray-500 pb-5">Diese Daten können keiner bestimmten Person zugeordnet werden und es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt.</p>
                        <p className="font-semibold text-gray-600 pb-5">Zu welchem Zweck verarbeiten wir die Daten?</p>
                        <p className="font-normal text-gray-500 pb-5">Die Verarbeitung der Logfiles erfolgt, um die Funktionsfähigkeit der Webseite zu garantieren und zur Sicherstellung der Sicherheit unserer informationstechnischen Systeme.</p>
                        <p className="font-semibold text-gray-600 pb-5">An wen geben wir die Daten weiter?</p>
                        <p className="font-normal text-gray-500 pb-5">Die Weitergabe der Daten durch uns richtet sich nach unseren<Link to="/" className="text-yellow-500 font-normal text-lg pb-1 hover:underline">Ausführungen zur Datenweitergabe.</Link></p>
                        <p className="font-semibold text-gray-600 pb-5">Wie können Sie die Datenverarbeitung verhindern?</p>
                        <p className="font-normal text-gray-500 pb-5">Die Daten werden nur so lang gespeichert, wie dies zur Erreichung des Zweckes ihrer Erhebung notwendig ist. Dementsprechend werden die Daten nach Beendigung jeder Sitzung gelöscht. Die Speicherung der Logfiles ist für den Betrieb der Webseite zwingend notwendig, Sie haben daher keine Möglichkeit, dagegen Widerspruch zu erheben, es denn Sie besuchen unsere Webseite nicht.</p>
                        <h4 className="font-semibold text-gray-800 text-3xl pb-5">Kontakt</h4>
                        <p className="font-normal text-gray-500 pb-5">Sie können auf mehrere Arten mit uns in Kontakt treten. Wenn Sie mit uns in Kontakt treten und personenbezogene Daten angeben, kommt es zu einer Datenverarbeitung durch uns. Gemeint ist hier jede mündliche, schriftliche und jede weitere Form der Kontaktausnahme mit uns.</p>
                        <p className="font-semibold text-gray-600 pb-5">Welche Daten verarbeiten wir?</p>
                        <p className="font-normal text-gray-500 pb-5">Wenn Sie mit uns in Kontakt treten, verarbeiten wir alle Daten, die Sie uns überlassen. Dazu zählen insbesondere:</p>
                        <ul className="list-disc pl-5 text-gray-400 pb-5">
                            <li className="pb-1 font-normal">Name</li>
                            <li className="pb-1 font-normal">E-Mail-Adresse</li>
                            <li className="pb-1 font-normal">Inhalt und Zeitpunkt Ihrer Kontaktaufnahme</li>
                            <li className="pb-1 font-normal">Kontaktdaten</li>
                        </ul>
                        <p className="font-normal text-gray-500 pb-5">Es kann vorkommen, dass Sie bestimmte Daten zwingend angeben müssen, um mit uns in Kontakt treten können, beispielsweise bei der Kontaktaufnahme über ein Kontaktformular oder wenn Sie einen Rückruf verlangen.</p>
                        <p className="font-semibold text-gray-600 pb-5">Zu welchem Zweck verarbeiten wir die Daten?</p>
                        <p className="font-normal text-gray-500 pb-5">Der Zweck, für den wir die Daten verwenden ergibt sich jeweils aus der Natur der Kontaktaufnahme. Wir verwenden die Daten allerdings in keinem Fall nicht für unvorhersehbare oder nicht zu erwartende Zwecke. Die häufigsten Zwecke sind Kommunikation und Rückmeldung, Kundenservice und die Bearbeitung geschäftlicher Anfragen.</p>
                        <p className="font-semibold text-gray-600 pb-5">An wen geben wir die Daten weiter?</p>
                        <p className="font-normal text-gray-500 pb-5">Die Weitergabe der Daten durch uns richtet sich nach unseren <Link to="/" className="text-yellow-500 font-normal text-lg pb-1 hover:underline">Ausführungen zur Datenweitergabe.</Link>Erfordert der Zweck Ihrer Kontaktaufnahme die Weitergabe Ihrer Daten an Dritte, so geben wir die Daten im erforderlichen Mass weiter</p>
                        <p className="font-semibold text-gray-600 pb-5">Wie können Sie die Datenverarbeitung verhindern?</p>
                        <p className="font-normal text-gray-500 pb-5">Sofern Sie mit uns in Kontakt treten, ist eine Datenverarbeitung nicht verhinderbar. Folglich müssen Sie auf eine Kontaktaufnahme mit uns verzichten, wenn Sie nicht möchten, dass Ihre Daten verarbeitet werden.</p>
                        <h4 className="font-bold text-gray-800 text-3xl pb-5">Cookies</h4>
                        <p className="font-normal text-gray-500 pb-5">Unsere Webseite verwendet Cookies. Bei Cookies handelt es sich um Textdateien, die mit Hilfe des Browsers auf dem Betriebssystem Ihres Gerätes abgelegt werden, wenn Sie unsere Webseite aufrufen. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Teils sind Cookies technisch notwendig, damit die Webseite funktionieren kann. Die meisten der von uns verwendeten Cookies sind so genannte “Session-Cookies”. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen oder ihre Laufzeit abläuft.</p>
                        <p className="font-semibold text-gray-600 pb-5">Zu welchem Zweck verarbeiten wir die Daten?</p>
                        <p className="font-normal text-gray-500 pb-5">Wir verwenden Cookies, damit wir anhand der erhobenen Daten unsere Webseite benutzerfreundlicher, effektiver und sicherer gestalten können. Insbesondere verwenden wir die Cookies für das Speichern Ihrer Präferenzen (beispielsweise Sprach- und Ortseinstellungen), die schnelle Bereitstellung und attraktive Darstellung der Websiteinhalte (beispielsweise durch die Verwendung von Fonts und Content Delivery Networks) sowie für die Analyse der Nutzung dieser Website zur statistischen Auswertung sowie für kontinuierliche Verbesserungen (in der Regel mittels Third Party Cookies). Für welche Zwecke wir die (technisch nicht notwendigen) Cookies im Einzelnen verwenden, ergibt sich aus den nachfolgenden Ausführungen in dieser Datenschutzerklärung.</p>
                        <p className="font-semibold text-gray-600 pb-5">An wen geben wir die Daten weiter?</p>
                        <p className="font-normal text-gray-500 pb-5">Die Weitergabe der Daten durch uns richtet sich nach unseren <Link to="/" className="text-yellow-500 font-normal text-lg pb-1 hover:underline">Ausführungen zur Datenweitergabe.</Link>Zudem sind die nachfolgenden Ausführungen zu den Einzelnen Datenbearbeitungen in dieser Datenschutzerklärung zu beachten.</p>
                        <p className="font-semibold text-gray-600 pb-5">Wie können Sie die Datenverarbeitung verhindern?</p>
                        <p className="font-normal text-gray-500 pb-5">Cookies werden auf Ihrem Rechner gespeichert. Sie können diese vollständig löschen oder durch Änderung der Einstellungen in Ihrem Browser die Übertragung deaktivieren oder einschränken. Bei Deaktivierung von Cookies für unsere Webseite können möglicherweise nicht mehr alle Funktionen der Webseite vollumfänglich genutzt werden.</p>
                        <p className="font-normal text-gray-500 pb-5">Anleitungen zu den gängigsten Browsern finden Sie hier:</p>
                        <ul className="list-disc pl-5 text-gray-400 pb-5">
                            <li className="pb-1 font-normal">Für<Link to="/" className="text-yellow-500 font-normal text-lg pb-1 hover:underline">Chrome</Link>von Google</li>
                            <li className="pb-1 font-normal">Für<Link to="/" className="text-yellow-500 font-normal text-lg pb-1 hover:underline">Safari</Link>von Apple</li>
                            <li className="pb-1 font-normal">Für<Link to="/" className="text-yellow-500 font-normal text-lg pb-1 hover:underline">Edge</Link>von Microsoft</li>
                            <li className="pb-1 font-normal">Für<Link to="/" className="text-yellow-500 font-normal text-lg pb-1 hover:underline">Firefox</Link>von Mozilla</li>
                        </ul>
                        <p className="font-normal text-gray-500 pb-5">Bei Cookies, die für die Erfolgs- und Reichweitenmessung oder für Werbung verwendet werden, ist für zahlreiche Dienste ein allgemeiner Widerspruch («Opt-out») über die Network Advertising Initiative (NAI), YourAdChoices (Digital Advertising Alliance) oder Your Online Choices (European Interactive Digital Advertising Alliance, EDAA) möglich.</p>
                        <h4 className="font-bold text-gray-800 text-3xl pb-5">Newsletter mit Erfolgs- und Reichweitenmessung</h4>
                        <p className="font-normal text-gray-500 pb-5">Über unsere Webseite haben Sie die Möglichkeit, sich für unseren Newsletter anzumelden. Mit dem Newsletter erhalten Sie Informationen zu neuen Beiträgen, Anlässen und Angeboten. Wir erheben Erfolgs- und Reichweitenmessungen über unseren Newsletter.</p>
                        <p className="font-semibold text-gray-600 pb-5">Welche Daten verarbeiten wir?</p>
                        <p className="font-normal text-gray-500 pb-5">Um den Newsletter zu versenden und die Erfolgs- und Reichweitenmessung vorzunehmen erheben wir insbesondere folgende Daten:</p>
                        <ul className="list-disc pl-5 text-gray-400 pb-5">
                            <li className="pb-1 font-normal">IP-Adresse</li>
                            <li className="pb-1 font-normal">Kontaktdaten</li>
                            <li className="pb-1 font-normal">Datum und Uhrzeit der Anmeldung</li>
                            <li className="pb-1 font-normal">Technische Informationen wie Browser, Betriebssystem oder Bildschirmauflösung</li>
                            <li className="pb-1 font-normal">Interaktionen mit dem Newsletter</li>
                        </ul>
                        <p className="font-normal text-gray-500 pb-5">Die IP-Adresse wird in der Regel anonymisiert, sodass ein Personenbezug nicht mehr möglich ist.</p>
                        <p className="font-semibold text-gray-600 pb-5">Zu welchem Zweck verwenden wir die Daten?</p>
                        <p className="font-normal text-gray-500 pb-5">Die erhobenen Daten verwenden wir für den Versand des Newsletters, für die Verifizierung und für die Anrede. Wir speichern Ihre Daten, insbesondere die zum Zeitpunkt der Anmeldung verwendete IP-Adresse und das Datum sowie die Uhrzeit, die Anmeldung zu protokollieren und um Missbräuche aufdecken zu können. Die Speicherung dieser Daten erfolgt über die Dauer, die Sie für den Newsletter angemeldet sind. Die IP-Adresse verwenden wir zudem, um Ihren ungefähren Standort zu ermitteln. Aus den daraus gewonnen Informationen können wir die Relevanz unserer Angebote in verschiedenen Regionen messen und Werbekampagnen segmentieren. Die technischen Informationen werden verwendet, um den Newsletter ordnungsgemäss auf jedem Gerät anzeigen zu können. Die Interaktionen, Zeit und Datum werden erhoben, damit wir anhand dieser Daten unsere Marketingkampagnen und Angebote auswerten und optimieren können. Zudem können wir anhand dieser Daten ermitteln, wie die Abonnenten mit unserem Newsletter interagieren.</p>
                        <p className="font-semibold text-gray-600 pb-5">An wen geben wir die Daten weiter?</p>
                        <p className="font-normal text-gray-500 pb-5">Wir geben Ihre Daten zum Zwecke der technischen Abwicklung und der Erfolgs- und Reichweitenmessung des Newsletters an damit beauftragte Dienstleister weiter. Teils besitzen diese Dienstleister über Server auf der ganzen Welt. Es besteht damit die Möglichkeit, dass die erhobenen Daten, durch unsere Dienstleister in die gesamte Welt übertragen werden können. Ferner gelten unsere <Link to="/" className="text-yellow-500 font-normal text-lg pb-1 hover:underline">Ausführungen zur Datenweitergabe.</Link></p>
                        <p className="font-semibold text-gray-600 pb-5">Wie können Sie die Datenverarbeitung verhindern?</p>
                        <h4 className="font-bold text-gray-800 text-3xl pb-5">Zählpixel</h4>
                        <p className="font-normal text-gray-500 pb-5">Wir können Zählpixel auf unserer Website oder in unseren E-Mails verwenden. Zählpixel werden auch als Web-Beacons bezeichnet. Bei Zählpixeln handelt es sich um kleine, üblicherweise nicht sichtbare Bilder, die beim Besuch unserer Website oder beim Öffnen unserer E-Mails automatisch abgerufen werden.</p>
                        <p className="font-semibold text-gray-600 pb-5">Welche Daten verarbeiten wir?</p>
                        <p className="font-normal text-gray-500 pb-5">Mit Zählpixeln können die gleichen Angaben wie in Logfiles erfasst werden. Zudem können Bewegungsprofile der gesamten Sitzung erhoben werden. Insbesondere werden Zählpixel durch Dritte, deren Dienste wir nutzen, eingesetzt. Über diese Dienste von Dritten wird in dieser Erklärung nachfolgend im Einzelnen informiert.</p>
                        <p className="font-semibold text-gray-600 pb-5">Zu welchem Zweck verarbeiten wir die Daten?</p>
                        <p className="font-normal text-gray-500 pb-5">Zählpixel werden von verschiedenen Trackingdiensten verwendet, um die Nutzung dieser Website zu analysieren und zur statistischen Auswertung sowie für kontinuierliche Verbesserungen. Zudem können Zählpixel für E-Mail-Tracking verwendet werden.</p>
                        <p className="font-semibold text-gray-600 pb-5">An wen geben wir die Daten weiter?</p>
                        <p className="font-normal text-gray-500 pb-5">Die Weitergabe der Daten durch uns richtet sich nach unseren <Link to="/" className="text-yellow-500 font-normal text-lg pb-1 hover:underline">Ausführungen zur Datenweitergabe.</Link>Beachten Sie zudem die Ausführungen in dieser Datenschutzerklärung zu den einzelnen Trackingdiensten.</p>
                        <p className="font-semibold text-gray-600 pb-5">Wie können Sie die Datenverarbeitung verhindern?</p>
                        <p className="font-normal text-gray-500 pb-5">Um die Datenverarbeitung mittels Zählpixeln zu verhindern, können Sie geeignete Browsererweiterungen wie uBlockOrigin installieren und in Ihrem E-Mail-Programm externe Grafiken blockieren.</p>
                        <h4 className="font-bold text-gray-800 text-3xl pb-5">Google Web Fonts</h4>
                        <p className="font-semibold text-gray-600 pb-5">Wie funktioniert Google Web Fonts?</p>
                        <p className="font-normal text-gray-500 pb-5">Wir benutzen auf unserer Website zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer unserer Seiten lädt Ihr Browser die benötigten Web Fonts in Ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.</p>
                        <p className="font-semibold text-gray-600 pb-5">Welche Informationen teilen Sie mit uns und wie werden sie genutzt?</p>
                        <p className="font-normal text-gray-500 pb-5">Der von Ihnen verwendete Browser stellt eine Verbindung zu den Servern von Google her. Hierdurch erlangt Google Kenntnis darüber, dass via Ihre IP-Adresse unsere Website aufgerufen wurde. Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.</p>
                        <p className="font-semibold text-gray-600 pb-5">Weshalb dürfen wir Google Web Fonts verwenden?</p>
                        <p className="font-normal text-gray-500 pb-5">Die Nutzung von Google Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote. Für weitere Informationen zu Google Web Fonts siehe die FAQs von Google Web Fonts:<Link to="/" className="text-yellow-500 font-normal text-lg pb-1 hover:underline">Ausführungen zur Datenweitergabe.</Link></p>
                        <h4 className="font-bold text-gray-800 text-3xl pb-5">Site Kit</h4>
                        <p className="font-normal text-gray-500 pb-5">Site Kit ist ein WordPress-Plugin, das von Google entwickelt wurde und verschiedene Tools und Informationen von Google auf einer Webseite zur Verfügung stellt. Es bietet Website-Besitzern nützliche Funktionen, um ihre Webseite zu optimieren und die Leistung zu verbessern.</p>
                        <p className="font-normal text-gray-500 pb-5">Einige der Verwendungen von Site Kit sind:</p>
                        <ol className="list-decimal pl-5 text-gray-400 pb-3">
                            <li className="font-normal pb-5">Website-Analyse: Site Kit zeigt die wichtigsten Metriken von Google Analytics direkt im WordPress-Dashboard an. Dadurch können Website-Besitzer die Besucherzahlen, Verweildauer, Absprungrate und andere wichtige Statistiken ihrer Webseite im Auge behalten.</li>
                            <li className="font-normal pb-5">Suchmaschinenoptimierung (SEO): Mit Site Kit können Website-Besitzer leicht Einblicke in die Performance ihrer Webseite in Suchmaschinen erhalten. Es zeigt die wichtigsten SEO-Metriken von Google Search Console wie z.B. Keywords, Impressionen, Klicks und CTR an.</li>
                            <li className="font-normal pb-1">PageSpeed-Insights: Site Kit integriert auch Google PageSpeed-Insights in das WordPress-Dashboard, um die Geschwindigkeit und Leistung der Webseite zu bewerten. Dadurch können Website-Besitzer Probleme erkennen und beheben, die die Ladezeiten und Benutzerfreundlichkeit ihrer Webseite beeinträchtigen. Site Kit bietet spezifische Empfehlungen und Maßnahmen zur Verbesserung der Seitengeschwindigkeit, wodurch die Benutzererfahrung optimiert und die SEO-Rankings potenziell verbessert werden können.</li>
                        </ol>
                        <p className="font-normal text-gray-500 pb-5">AdSense-Integration: Site Kit bietet auch eine einfache Integration von Google AdSense, sodass Website-Besitzer Werbeeinnahmen direkt im WordPress-Dashboard verfolgen können. Es zeigt detaillierte Berichte über die Anzeigenleistung, Einnahmen und andere wichtige Metriken.</p>
                        <h4 className="font-bold text-gray-800 text-3xl pb-5">PrivacyBee</h4>
                        <p className="font-normal text-gray-500 pb-5">Wir verwenden auf unserer Webseite den PrivacyBee, eine Dienstleistung des Anbieters PrivacyBee AG, Laupenstrasse 1, 3008 Bern, Schweiz. PrivacyBee wird verwendet, um alle datenschutzrelevanten Dienste zu erkennen und daraus eine individuelle Datenschutzerklärung für die Webseite zu erzeugen.</p>
                        <p className="font-semibold text-gray-600 pb-5">Welche Daten verarbeiten wir?</p>
                        <p className="font-normal text-gray-500 pb-5">PrivacyBee ist ein Dienst zur Generierung von Datenschutzerklärungen, die dann per JavaScript in unsere Webseite eingebunden wird. Für die Bereitstellung dieses Dienstes werden folgende Daten verarbeitet:</p>
                        <ul className="list-disc pl-5 text-gray-400 pb-5">
                            <li className="pb-1 font-normal">IP-Adresse</li>
                            <li className="pb-1 font-normal">Browser-Typ und -Version</li>
                            <li className="pb-1 font-normal">Betriebssystem</li>
                            <li className="pb-1 font-normal">Datum und Uhrzeit des Zugriffs auf unsere Datenschutzerklärung</li>
                        </ul>
                        <p className="font-semibold text-gray-600 pb-1">Zu welchem Zweck verarbeiten wir die Daten?</p>
                        <p className="font-normal text-gray-500 pb-5">Die Erhebung dieser Daten ermöglicht uns, die Datenschutzerklärung korrekt auf Ihrer Endgerätekonfiguration anzuzeigen und sicherzustellen, dass die Inhalte korrekt und auf dem neuesten Stand sind.</p>
                        <p className="font-semibold text-gray-600 pb-1">An wen geben wir die Daten weiter?</p>
                        <p className="font-normal text-gray-500 pb-5">Die Weitergabe der Daten durch uns richtet sich nach unseren Ausführungen zur Datenweitergabe. Die Daten, die durch die Nutzung von PrivacyBee gesammelt werden, bleiben <br />
                            bei PrivacyBee.</p>
                        <p className="font-semibold text-gray-600 pb-1">Wie können Sie die Verarbeitung Ihrer Daten verhindern?</p>
                        <p className="font-normal text-gray-500 pb-5">Um die Verarbeitung Ihrer Daten durch PrivacyBee zu verhindern, können Sie JavaScript in Ihrem Browser deaktivieren. Bitte beachten Sie jedoch, dass bei einer Deaktivierung von JavaScript unter Umständen nicht alle Funktionen unserer Webseite vollumfänglich nutzbar sind. Eine spezifische Opt-out-Möglichkeit für den Dienst PrivacyBee selbst bieten wir nicht an, da der Dienst wesentlich für die Bereitstellung unserer Datenschutzerklärung ist.</p>
                        <h2 className="font-bold text-gray-800 text-[33px] pb-5">Bleibt unsere Datenschutzerklärung immer bgleich?</h2>
                        <p className="font-normal text-gray-500 pb-20">Wir können diese Datenschutzerklärung jederzeit ändern. Die Änderungen werden auf <Link to="/" className="text-yellow-500 font-normal text-lg pb-1 hover:underline">hammerstein1870.group</Link>veröffentlicht. Sie werden nicht gesondert informiert.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Impressum;