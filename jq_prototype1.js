
        function Dog(color, name, age) {
            this.color = color;
            this.name = name;
            this.age = age;
        }

        let myDog = new Dog("흰색", "마루", 1);
        delete myDog.age;

        document.write("강아지나이는 " +myDog.age + " 입니다.") 
