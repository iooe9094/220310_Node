
        function Dog(color, name, age) {
            this.color = color;
            this.name = name;
            this.age = age;
        }

        Dog.prototype.family = '시베리안 허스키';
        Dog.prototype.breed = function(){
            return this.color + ' ' + this.family;
        };

        let myDog = new Dog('흰색', '마루', 1);
        let hisDog = new Dog('갈색', '콩이', 3);

        document.write('우리 집 강아지는 ' + myDog.family + ' 이고, 친구네 집 강아지도 ' + hisDog.family + ' 입니다. <br>');
        document.write('우리 집 강아지의 품종은 ' + myDog.breed() + ' 입니다. <br>');
        document.write('친구네 집 강아지의 품종은 ' + hisDog.breed() + ' 입니다.');
