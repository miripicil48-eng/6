class Inicio extends Phaser.Scene {
    constructor (){
        super("Inicio");
    }

    create (){
        // Fondo
        const { width, height } = this.scale;

    // Añadir la imagen de fondo centrada
    let fondo = this.add.image(width / 2, height / 2, "fondoInicio");
    
    // Ajustar el fondo para que cubra toda la pantalla
    fondo.setDisplaySize(width, height);
        
       
        
        //Titulo
        this.add.text(
            this.scale.width / 2,
            this.scale.height / 2 -120,
            "Descubre la imagen",
            {
                fontSize: "60px",
                color: "#660000"
            }
            ).setOrigin(0.5);

            //Intrucciones
        this.add.text (
            this.scale.width / 2,
            this.scale.height /2 - 40,
            "Elimina las imagenes para descubrir el mensaje oculto",
                {
                fontSize: "50px",
                align: "center",
                color: "#870000"
                }
            ).setOrigin(0.5);
        
            //Boton jugar.
            let boton =this.add.text (
                this.scale.width / 2,
                this.scale.height / 2 + 80,
                "JUGAR",
                {
                    fontSize: "32PX",
                    color: "#7b0000",
                    BackgroundColor: "#000",
                    padding: { x:20, y: 10}
                }
            ).setOrigin(0.5);

            boton.setInteractive();

            boton.on("pointerdown", () => {
                this.scene.start("Juego");
            });

            //Efecto hover
            boton.on ("pointerover", () => {
                boton.setStyle({ color: "#009c34"});
            });

            boton.on("pointerout", () => {
                boton.setStyle({ color: "#ffffff"});
            });
        
    }
}