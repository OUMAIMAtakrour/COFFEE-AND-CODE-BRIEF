#include <stdio.h>
#include <stdlib.h>

int main()
{

   char Nom[20];
   char Prenom[20];
   int Age ;
   char Sexe[10];
   char Numero_de_telephone [10];

    printf("Ecrivez votre Age:\n");
    scanf("%d",&Age);


    printf("Ecrivez votre Nom:\n");
    scanf("%s",&Nom);
    printf("Ecrivez votre Prenom:\n");
    scanf("%s",&Prenom);
    printf("Saisissez votre Sexe:\n");
    scanf("%s",&Sexe);
    printf("Ecrivez votre Numero de telephone:\n");
    scanf("%s",&Numero_de_telephone);
//AFFICHAGE
    printf("Affichage des informations:\n");
    printf("Nom: %s \n",Nom);
    printf("Prenom: %s\n",Prenom);

    return 0;
}
