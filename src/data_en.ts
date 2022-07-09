import { Node } from './logic/Node';

export const data = new Node(
  "Welcome to your digital legal adviser! You have recently received a notice of termination and are now wondering whether it makes sense to file an action for wrongful termination according to § 4 S. 1 KSchG? \n Let's check it out together!",
  {
    Next: new Node(
      'In order to defend yourself against an unlawful termination, it must first be determined whether there was an employment contract between you and your employer in the first place in accordance with § 611a of the German Civil Code (BGB).',
      {
        Next: new Node(
          'First of all, it must be checked whether you could file a lawsuit at all, i.e. whether the necessary prerequisites for a decision on the merits would be met.',
          {
            Next: new Node(
              'First of all, it must be determined whether legal recourse to the labor courts is possible pursuant to § 2 I No. 3 b) ArbGG.\n' +
                '\n' +
                'Did you have an employment relationship with your employer (who gave the notice) according to § 611a BGB, i.e. were you an employee?',
              {
                Yes: new Node(
                  'Now we have to check at which court you would have to file the lawsuit.\n' +
                    '\n' +
                    'The local jurisdiction is based on §§ 46 II, 48 Ia ArbGG, §§ 12 ff. ZPO.\n' +
                    '\n' +
                    'Where was your last usual place of work?',
                  {
                    Next: new Node(
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
                No: new Node(
                  'Tut uns leid, mangels der Sachentscheidungsvoraussetzungen deiner Klage, macht es keinen Sinn Kündigungsschutzklage nach § 4 S.1 KSchG zu erheben.',
                  {},
                ),
                Check: new Node(
                  'Oh, then we first have to check whether there was an employment relationship between you and your boss according to § 611a I BGB.',
                  {
                    Next: new Node(
                      'Did you conclude a private law contract with your employer?\n' +
                        '\n' +
                        'This is not the case if you performed your work because you were a civil servant, a soldier or a prisoner.\n' +
                        '\n' +
                        'The form of this contract conclusion (written or oral) is not decisive for this.',
                      {
                        Yes: new Node(
                          'It is relevant whether there was an employment relationship between you according to § 611a BGB or a service relationship according to § 611 BGB.\n' +
                            '\n' +
                            'Did you promise your contractual partner the provision of a certain result (e.g. finished work such as a program, a piece of furniture) or the provision of a certain work (e.g. programming from 8:00 a.m. to 5:00 p.m.; childcare, project management)?',
                          {
                            'Delivery of a specific success': new Node(
                              'Sorry, due to the lack of an employment relationship, you were unfortunately not an employee according to § 611a BGB. In the absence of the substantive requirements for your action, it does not make sense to file an action for protection against dismissal pursuant to § 4 S.1 of the German Unfair Dismissal Act (KSchG).',
                              {},
                            ),
                            'Delivery of a specific work': new Node(
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
                        No: new Node('', {}),
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
