import { Node } from './logic/Node';

export const data = new Node(
  'Macht es Sinn, Kündigungsschutzklage gem. § 4 S. 1 KSchG zu erheben?',
  {
    Next: new Node(
      'Nur, wenn du einen Arbeitsvertrag hast und dieses Arbeitsverhältnis nicht durch eine ausgesprochene Kündigung beendet wurde. Also lass uns prüfen, ob du eine Kündigungsschutzklage erheben kannst und ob diese Aussicht auf Erfolg haben wird!',
      {
        Next: new Node(
          'Zuerst muss geprüft werden, ob du überhaupt klagen könntest, also ob die nötigen Sachentscheidungsvoraussetzungen vorliegen würden.',
          {
            Next: new Node(
              'Zuerst muss festgestellt werden, ob der Rechtsweg zu den Arbeitsgerichten nach § 2 I Nr. 3 b) ArbGG eröffnet ist.\n' +
                '\n' +
                'Hattest du mit deinem Arbeitgeber (der die Kündigung ausgesprochen hat) ein Arbeitsverhältnis gem. § 611a BGB, warst du also ein Arbeitnehmer?',
              {
                Yes: new Node(
                  'Nun müssen wir prüfen, bei welchem Gericht du die Klage erheben müsstest.\n' +
                    '\n' +
                    'Die örtliche Gerichtszuständigkeit richtet sich nach §§ 46 II, 48 Ia ArbGG, §§ 12 ff. ZPO.\n' +
                    '\n' +
                    'Wo war dein letzter gewöhnlicher Arbeitsort?\n' +
                    '\n' +
                    'Bitte irgendwas eingeben, komplett egal was',
                  {
                    Next: new Node(
                      'Deine Partei- und Prozessfähigkeit bestimmt sich nach § 46 II ArbGG, §§ 50, 51 I, 52 ZPO.\n' +
                        '\n' +
                        'Sofern du bereits geboren bist (wovon wir ausgehen), bist du auch parteifähig nach § 50 ZPO iVm § 1 BGB.\n' +
                        '\n' +
                        'Bist du bereits volljährig (mind. 18 Jahre alt) gem. § 2 BGB?',
                      {
                        Yes: new Node(
                          'Für deine Klage benötigst du ein Rechtsschutzbedürfnis gem. § 46 II 1 ArbGG, §§ 495 I, 256 I ZPO.\n' +
                            '\n' +
                            'An diesem Rechtsschutzbedürfnis könnte es dir aber fehlen, wenn du mit deinem Arbeitgeber einen Klageverzicht vereinbart hast. Hast du, nachdem dein Arbeitgeber die Kündigung ausgesprochen hat, einen Klageverzicht mit diesem vereinbart oder war eine Klageverzichts-Klausel in einem von dir unterzeichneten Aufhebungsvertrag enthalten?',
                          {
                            Yes: new Node(
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
                            No: new Node('', {}),
                          },
                        ),
                        No: new Node(
                          'Keine Sorge, auch wenn du minderjährig bist, ist es möglich gegen deine Kündigung zu klagen!\n' +
                            '\n' +
                            ' \n' +
                            '\n' +
                            '🔰 Undone §§ 112, 113 BGB bzw. §§ 1626, 1629 BGB Noch einbauen!',
                          { Yes: new Node('', {}), No: new Node('', {}) },
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
                  'Oh, dann müssen wir erstmal prüfen, ob zwischen dir und deinem Chef überhaupt ein Arbeitsverhältnis nach § 611a I BGB vorlag.',
                  {
                    Next: new Node(
                      'Hast du mit deinem Arbeitgeber einen privatrechtlichen Vertrag geschlossen?\n' +
                        '\n' +
                        'Dies ist dann nicht der Fall, wenn du deinen Arbeit erbracht hast, weil du verbeamtest warst, Soldat oder Strafgefangener warst.\n' +
                        '\n' +
                        'Die Form dieses Vertragsschlusses (schriftlich oder mündlich) ist dafür nicht entscheidend.',
                      {
                        Yes: new Node(
                          'Relevant ist, ob zwischen euch ein Arbeitsverhältnis nach § 611a BGB oder ein Dienstverhältnis nach § 611 BGB vorlag.\n' +
                            '\n' +
                            'Hast du deinem Vertragspartner die Erbringung eines bestimmten Erfolgs zugesichert (z.B. fertiges Werk wie ein Programm, ein Möbelstück) oder die Erbringung einer bestimmten Arbeit (z.B. Programmieren von 8.00 Uhr bis 17.00 Uhr; Kinderbetreuung, Projektmanagement)?',
                          {
                            'Erbringung eines bestimmten Erfolges': new Node(
                              '',
                              {},
                            ),
                            'Erbringen einer bestimmten Arbeit': new Node(
                              '',
                              {},
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
