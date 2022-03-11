
        // 객체 정의
        function Dog(color, name, age) {
            this.color = color;
            this.name = name;
            this.age = age;
        }

        // 깊은 복사
        let myDog = new Dog('흰색', '마루', 1);
        let hisDog = new Dog('흰색', '마루', 1);
        console.log((myDog == hisDog) + "<br>");
        console.log((myDog === hisDog) + "<br>");

        // 얕은 복사
        let herDog = hisDog;
        console.log((hisDog == herDog) + "<br>");
        console.log((hisDog === herDog) + "<br>");
