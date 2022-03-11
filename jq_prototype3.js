
        // 객체 정의
        function Dog(color, name, age) {
            this.color = color;
            this.name = name;
            this.age = age;
        }

        // 객체 생성
        let myDog = new Dog('흰색','마루',1);

        // 1번
        document.write("우리집 강아지는 " + myDog.name + "라는 이름의 " + myDog.color +
        "털이 매력적인 " + myDog.age + "살 된 강아지입니다." + "<br>");
        
        myDog.family = "시베리안 허스키";
        myDog.breed = function() {
            return this.color + " " + this.family;
        }
        document.write("우리집 강아지는 " + myDog.breed() + " 입니다.");
