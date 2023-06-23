
        var canvas = document.getElementById("renderCanvas");
        var engine = new BABYLON.Engine(canvas, true);

        var scene = new BABYLON.Scene(engine);
        var camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 0, -10), scene);
        var light = new BABYLON.DirectionalLight("light", new BABYLON.Vector3(0, -1, 0), scene);
        var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);
        var material = new BABYLON.StandardMaterial("material", scene);
        material.diffuseTexture = new BABYLON.Texture("path/to/texture.png", scene);
        sphere.material = material;
        var animation = new BABYLON.Animation(
            "panicAnimation",
            "rotation.y",
            30,
            BABYLON.Animation.ANIMATIONTYPE_FLOAT,
            BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
        );

        var keys = [];
        keys.push({
            frame: 0,
            value: 0
        });
        keys.push({
            frame: 100,
            value: Math.PI * 2
        });

        animation.setKeys(keys);
        sphere.animations = [];
        sphere.animations.push(animation);
        scene.beginAnimation(sphere, 0, 100, true);
        
        engine.runRenderLoop(function () {
            scene.render();
        });
        
        window.addEventListener("resize", function () {
            engine.resize();
        });

