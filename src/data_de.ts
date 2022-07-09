import { Node } from './logic/Node';

export const data = new Node(
  'Willkommen bei deinem digitalen Legal Adviser!\n' +
    '\n' +
    'Du hast kürzlich eine Kündigung erhalten und fragst dich nun, ob es Sinn macht eine Kündigungsschutzklage gem. § 4 S. 1 KSchG zu erheben?\n' +
    '\n' +
    'Lass uns das gemeinsam überprüfen!',
  {
    Weiter: new Node(
      'Um dich gegen eine rechtswidrige Kündigung zu wehren, muss zuerst festgestellt werden, ob zwischen dir und deinem Arbeitgeber überhaupt ein Arbeitsvertrag nach § 611a BGB bestand.',
      {
        Weiter: new Node(
          'Zuerst muss geprüft werden, ob du überhaupt klagen könntest, also ob die nötigen Sachentscheidungsvoraussetzungen vorliegen würden.',
          {
            Weiter: new Node(
              'Zuerst muss festgestellt werden, ob der Rechtsweg zu den Arbeitsgerichten nach § 2 I Nr. 3 b) ArbGG eröffnet ist.\n' +
                '\n' +
                'Hattest du mit deinem Arbeitgeber (der die Kündigung ausgesprochen hat) ein Arbeitsverhältnis gem. § 611a BGB, warst du also ein Arbeitnehmer?',
              {
                Ja: new Node(
                  'Nun müssen wir prüfen, bei welchem Gericht du die Klage erheben müsstest.\n' +
                    '\n' +
                    'Die örtliche Gerichtszuständigkeit richtet sich nach §§ 46 II, 48 Ia ArbGG, §§ 12 ff. ZPO.\n' +
                    '\n' +
                    'Wo war dein letzter gewöhnlicher Arbeitsort?',
                  {
                    Weiter: new Node(
                      'Deine Partei- und Prozessfähigkeit bestimmt sich nach § 46 II ArbGG, §§ 50, 51 I, 52 ZPO.\n' +
                        '\n' +
                        'Sofern du bereits geboren bist (wovon wir ausgehen), bist du auch parteifähig nach § 50 ZPO iVm § 1 BGB.\n' +
                        '\n' +
                        'Bist du bereits volljährig (mind. 18 Jahre alt) gem. § 2 BGB?',
                      {
                        Ja: new Node(
                          'Für deine Klage benötigst du ein Rechtsschutzbedürfnis gem. § 46 II 1 ArbGG, §§ 495 I, 256 I ZPO.\n' +
                            '\n' +
                            'An diesem Rechtsschutzbedürfnis könnte es dir aber fehlen, wenn du mit deinem Arbeitgeber einen Klageverzicht vereinbart hast. Hast du, nachdem dein Arbeitgeber die Kündigung ausgesprochen hat, einen Klageverzicht mit diesem vereinbart oder war eine Klageverzichts-Klausel in einem von dir unterzeichneten Aufhebungsvertrag enthalten?',
                          {
                            Ja: new Node(
                              'Okay, dann müssen wir uns nun ansehen, wie dieser Klageverzicht vereinbart wurde und ob das wirksam ist.\n' +
                                '\n' +
                                'Was hast du unterschrieben? Einen Aufhebungsvertrag (der in einer Klausel einen Klageverzicht enthält), einen einfachen Klageverzichtsvertrag oder ein Klagerücknahmeversprechen? Letzteres kann nur dann in Betracht kommen, wenn du bereits Kündigungsschutzklage erhoben hast. 🔰 Prämisse: Erstberatung????',
                              {
                                Aufhebungsvertrag: new Node('', {}),
                                'Einfacher Klageverzichtsvertrag': new Node(
                                  '',
                                  {},
                                ),
                              },
                            ),
                            Nein: new Node('', {}),
                          },
                        ),
                        Nein: new Node(
                          'Keine Sorge, auch wenn du minderjährig bist, ist es möglich gegen deine Kündigung zu klagen!\n' +
                            '\n' +
                            ' \n' +
                            '\n' +
                            '🔰 Undone §§ 112, 113 BGB bzw. §§ 1626, 1629 BGB Noch einbauen!',
                          { Ja: new Node('', {}), Nein: new Node('', {}) },
                        ),
                      },
                    ),
                  },
                ),
                Nein: new Node(
                  'Tut uns leid, mangels der Sachentscheidungsvoraussetzungen deiner Klage, macht es keinen Sinn Kündigungsschutzklage nach § 4 S.1 KSchG zu erheben.',
                  {},
                ),
                Unsicher: new Node(
                  'Oh, dann müssen wir erstmal prüfen, ob zwischen dir und deinem Chef überhaupt ein Arbeitsverhältnis nach § 611a I BGB vorlag.',
                  {
                    Weiter: new Node(
                      'Hast du mit deinem Arbeitgeber einen privatrechtlichen Vertrag geschlossen?\n' +
                        '\n' +
                        'Dies ist dann nicht der Fall, wenn du deinen Arbeit erbracht hast, weil du verbeamtest warst, Soldat oder Strafgefangener warst.\n' +
                        '\n' +
                        'Die Form dieses Vertragsschlusses (schriftlich oder mündlich) ist dafür nicht entscheidend.',
                      {
                        Ja: new Node(
                          'Relevant ist, ob zwischen euch ein Arbeitsverhältnis nach § 611a BGB oder ein Dienstverhältnis nach § 611 BGB vorlag.\n' +
                            '\n' +
                            'Hast du deinem Vertragspartner die Erbringung eines bestimmten Erfolgs zugesichert (z.B. fertiges Werk wie ein Programm, ein Möbelstück) oder die Erbringung einer bestimmten Arbeit (z.B. Programmieren von 8.00 Uhr bis 17.00 Uhr; Kinderbetreuung, Projektmanagement)?',
                          {
                            'Erbringung eines bestimmten Erfolges': new Node(
                              'Tut uns leid, mangels Arbeitsverhältnisses warst du leider kein Arbeitnehmer gem. § 611a BGB. Mangels der Sachentscheidungsvoraussetzungen deiner Klage, macht es keinen Sinn Kündigungsschutzklage nach § 4 S.1 KSchG zu erheben.',
                              {},
                            ),
                            'Erbringen einer bestimmten Arbeit': new Node(
                              'Relevant ist, dass du deine Tätigkeit für einen anderen (also deinen Arbeitgeber) erbracht hast.\n' +
                                '\n' +
                                'Dies ist beispielsweise dann nicht der Fall, wenn du aufgrund eines Gesellschaftsvertrags zur Leistung deiner Tätigkeit nach §§ 705, 706 III BGB verpflichtet warst.\n' +
                                '\n' +
                                'Vorliegend gehen wir davon aus, dass dies hier nicht der Fall ist.',
                              {
                                Weiter: new Node(
                                  'Haben du und dein Vertragspartner ein Entgelt für deine Tätigkeit vereinbart bzw. wurde dir in der Vergangenheit ein Entgelt gezahlt?',
                                  {
                                    Ja: new Node(
                                      'Warst du während deiner Tätigkeit für deinen Vertragspartner von diesem persönlich abhängig und an seine Weisungen nach § 106 GewO, § 611a I 2, 3 BGB gebunden?',
                                      {
                                        Ja: new Node(
                                          'Herzlichen Glückwunsch, du hattest zumindest mal ein Arbeitsverhältnis! Sofern dieses Arbeitsverhältnis nicht wirksam durch deinen Arbeitgeber gekündigt wurde, bist du auch noch Arbeitnehmer. Das finden wir jetzt zusammen heraus!',
                                          {
                                            Weiter: new Node(
                                              'Nun müssen wir prüfen, bei welchem Gericht du die Klage erheben müsstest.\n' +
                                                '\n' +
                                                'Die örtliche Gerichtszuständigkeit richtet sich nach §§ 46 II, 48 Ia ArbGG, §§ 12 ff. ZPO.\n' +
                                                '\n' +
                                                'Wo war dein letzter gewöhnlicher Arbeitsort?',
                                              {
                                                Weiter: new Node(
                                                  'Deine Partei- und Prozessfähigkeit bestimmt sich nach § 46 II ArbGG, §§ 50, 51 I, 52 ZPO.\n' +
                                                    '\n' +
                                                    'Sofern du bereits geboren bist (wovon wir ausgehen), bist du auch parteifähig nach § 50 ZPO iVm § 1 BGB.\n' +
                                                    '\n' +
                                                    'Bist du bereits volljährig (mind. 18 Jahre alt) gem. § 2 BGB?',
                                                  {
                                                    Ja: new Node(
                                                      'Für deine Klage benötigst du ein Rechtsschutzbedürfnis gem. § 46 II 1 ArbGG, §§ 495 I, 256 I ZPO.\n' +
                                                        '\n' +
                                                        'An diesem Rechtsschutzbedürfnis könnte es dir aber fehlen, wenn du mit deinem Arbeitgeber einen Klageverzicht vereinbart hast. Hast du, nachdem dein Arbeitgeber die Kündigung ausgesprochen hat, einen Klageverzicht mit diesem vereinbart oder war eine Klageverzichts-Klausel in einem von dir unterzeichneten Aufhebungsvertrag enthalten?',
                                                      {
                                                        Ja: new Node(
                                                          'Okay, dann müssen wir uns nun ansehen, wie dieser Klageverzicht vereinbart wurde und ob das wirksam ist.\n' +
                                                            '\n' +
                                                            'Was hast du unterschrieben? Einen Aufhebungsvertrag (der in einer Klausel einen Klageverzicht enthält), einen einfachen Klageverzichtsvertrag oder ein Klagerücknahmeversprechen? Letzteres kann nur dann in Betracht kommen, wenn du bereits Kündigungsschutzklage erhoben hast. 🔰 Prämisse: Erstberatung????',
                                                          {
                                                            Aufhebungsvertrag:
                                                              new Node('', {}),
                                                            'Einfacher Klageverzichtsvertrag':
                                                              new Node('', {}),
                                                          },
                                                        ),
                                                        Nein: new Node('', {}),
                                                      },
                                                    ),
                                                    Nein: new Node(
                                                      'Keine Sorge, auch wenn du minderjährig bist, ist es möglich gegen deine Kündigung zu klagen!\n' +
                                                        '\n' +
                                                        ' \n' +
                                                        '\n' +
                                                        '🔰 Undone §§ 112, 113 BGB bzw. §§ 1626, 1629 BGB Noch einbauen!',
                                                      {
                                                        Ja: new Node('', {}),
                                                        Nein: new Node('', {}),
                                                      },
                                                    ),
                                                  },
                                                ),
                                              },
                                            ),
                                          },
                                        ),
                                        Nein: new Node(
                                          'Tut uns leid, mangels Arbeitsverhältnisses warst du leider kein Arbeitnehmer gem. § 611a BGB. Mangels der Sachentscheidungsvoraussetzungen deiner Klage, macht es keinen Sinn Kündigungsschutzklage nach § 4 S.1 KSchG zu erheben.',
                                          {},
                                        ),
                                        Unsicher: new Node(
                                          'Du bist dir unsicher, was es bedeutet, weisungsgebunden gem. § 106 GewO, § 611a I 2, 3 BGB zu sein?\n' +
                                            '\n' +
                                            'Keine Sorge, das können wir gemeinsam erarbeiten!\n' +
                                            '\n' +
                                            'Treffen folgende Kriterien überwiegend auf dich zu oder eher nicht?\n' +
                                            '\n' +
                                            '- Fremdbestimmtheit bzgl. Inhalt, Durchführung, Zeit und Ort der Arbeit\n' +
                                            '\n' +
                                            '- Eingliederung in eine fremde Betriebsorganisation\n' +
                                            '\n' +
                                            '- Keine Nebentätigkeit, Bereitstellen gesamter/überwiegender Arbeitskraft\n' +
                                            '\n' +
                                            '- Fortlaufende Vergütung\n' +
                                            '\n' +
                                            '- Regelmäßige Berichterstattung\n' +
                                            '\n' +
                                            '- Urlaubsgewährung\n' +
                                            '\n' +
                                            '- Arbeitgeber trägt Unternehmensrisiko und -chancen',
                                          {
                                            Ja: new Node(
                                              'Herzlichen Glückwunsch, du hattest zumindest mal ein Arbeitsverhältnis! Sofern dieses Arbeitsverhältnis nicht wirksam durch deinen Arbeitgeber gekündigt wurde, bist du auch noch Arbeitnehmer. Das finden wir jetzt zusammen heraus!',
                                              {
                                                Weiter: new Node(
                                                  'Nun müssen wir prüfen, bei welchem Gericht du die Klage erheben müsstest.\n' +
                                                    '\n' +
                                                    'Die örtliche Gerichtszuständigkeit richtet sich nach §§ 46 II, 48 Ia ArbGG, §§ 12 ff. ZPO.\n' +
                                                    '\n' +
                                                    'Wo war dein letzter gewöhnlicher Arbeitsort?',
                                                  {
                                                    Weiter: new Node(
                                                      'Deine Partei- und Prozessfähigkeit bestimmt sich nach § 46 II ArbGG, §§ 50, 51 I, 52 ZPO.\n' +
                                                        '\n' +
                                                        'Sofern du bereits geboren bist (wovon wir ausgehen), bist du auch parteifähig nach § 50 ZPO iVm § 1 BGB.\n' +
                                                        '\n' +
                                                        'Bist du bereits volljährig (mind. 18 Jahre alt) gem. § 2 BGB?',
                                                      {
                                                        Ja: new Node(
                                                          'Für deine Klage benötigst du ein Rechtsschutzbedürfnis gem. § 46 II 1 ArbGG, §§ 495 I, 256 I ZPO.\n' +
                                                            '\n' +
                                                            'An diesem Rechtsschutzbedürfnis könnte es dir aber fehlen, wenn du mit deinem Arbeitgeber einen Klageverzicht vereinbart hast. Hast du, nachdem dein Arbeitgeber die Kündigung ausgesprochen hat, einen Klageverzicht mit diesem vereinbart oder war eine Klageverzichts-Klausel in einem von dir unterzeichneten Aufhebungsvertrag enthalten?',
                                                          {
                                                            Ja: new Node(
                                                              'Okay, dann müssen wir uns nun ansehen, wie dieser Klageverzicht vereinbart wurde und ob das wirksam ist.\n' +
                                                                '\n' +
                                                                'Was hast du unterschrieben? Einen Aufhebungsvertrag (der in einer Klausel einen Klageverzicht enthält), einen einfachen Klageverzichtsvertrag oder ein Klagerücknahmeversprechen? Letzteres kann nur dann in Betracht kommen, wenn du bereits Kündigungsschutzklage erhoben hast. 🔰 Prämisse: Erstberatung????',
                                                              {
                                                                Aufhebungsvertrag:
                                                                  new Node(
                                                                    '',
                                                                    {},
                                                                  ),
                                                                'Einfacher Klageverzichtsvertrag':
                                                                  new Node(
                                                                    '',
                                                                    {},
                                                                  ),
                                                              },
                                                            ),
                                                            Nein: new Node(
                                                              '',
                                                              {},
                                                            ),
                                                          },
                                                        ),
                                                        Nein: new Node(
                                                          'Keine Sorge, auch wenn du minderjährig bist, ist es möglich gegen deine Kündigung zu klagen!\n' +
                                                            '\n' +
                                                            ' \n' +
                                                            '\n' +
                                                            '🔰 Undone §§ 112, 113 BGB bzw. §§ 1626, 1629 BGB Noch einbauen!',
                                                          {
                                                            Ja: new Node(
                                                              '',
                                                              {},
                                                            ),
                                                            Nein: new Node(
                                                              '',
                                                              {},
                                                            ),
                                                          },
                                                        ),
                                                      },
                                                    ),
                                                  },
                                                ),
                                              },
                                            ),
                                            Nein: new Node(
                                              'Tut uns leid, mangels Arbeitsverhältnisses warst du leider kein Arbeitnehmer gem. § 611a BGB. Mangels der Sachentscheidungsvoraussetzungen deiner Klage, macht es keinen Sinn Kündigungsschutzklage nach § 4 S.1 KSchG zu erheben.',
                                              {},
                                            ),
                                          },
                                        ),
                                      },
                                    ),
                                    Nein: new Node('', {}),
                                  },
                                ),
                              },
                            ),
                          },
                        ),
                        Nein: new Node('', {}),
                      },
                    ),
                  },
                ),
              },
            ),
          },
        ),
      },
    ),
  },
);
