      mostrarMensaje();
      //Se agregan tareas con el evento onclick
      document.getElementById("boton").onclick=
      
      function agregarTarea() 
      {
        var nuevaTarea = document.getElementById("nuevaTarea").value;
        var nuevaFila = document.createElement("div");
        nuevaFila.className="row fila_Lista";

        var parrafo1 = document.createElement("p");
        parrafo1.className="tarea col s12 m11";
        
        var txt=document.createTextNode(nuevaTarea);
        parrafo1.appendChild(txt);

        nuevaFila.appendChild(parrafo1);

        var parrafo2 = document.createElement("p");
        parrafo2.className="icono col s12 m1";

        var img=document.createElement("img");
        img.className="icono_Remove";
        img.setAttribute("src","images/remove.svg");
        parrafo2.appendChild(img);

        var mensaje =  document.getElementById("mensaje");
        var titulo = document.getElementById("titulo_Lista");

        if (mensaje!=null)
        {
          var padre = titulo.parentNode;
          padre.removeChild(mensaje);       
        }


        titulo.parentNode.insertBefore(nuevaFila,titulo.nextSibling);

        parrafo1.parentNode.insertBefore(parrafo2,parrafo1.nextSibling);

        borrarTarea();

      };


      function borrarTarea()
      {
        var close = document.getElementsByClassName("icono_Remove");

        if (close!=null)
        { 
          var i;
          for (i = 0; i < close.length; i++) 
          {
              if (close[i]!=null)
              {
                close[i].onclick = function() 
                {
                   var div = this.parentNode.parentNode.parentNode;
                   div.removeChild(this.parentNode.parentNode);
                   mostrarMensaje();
                }
              }
          }
        }

      }

      //Mostrar Mensaje cuando no hay tareas
      function mostrarMensaje()
      {
        var lista=document.getElementsByClassName("fila_Lista");
      
        if (lista.length==0) 
        {
          var mensaje = document.createElement("div");
          mensaje.className="row fila_Lista";
          mensaje.setAttribute("id","mensaje");
          
          var texto = document.createTextNode("No hay ToDo's, tomate un caf\u00E9!");
          
          mensaje.appendChild(texto);
          
          var titulo = document.getElementById("titulo_Lista");

          titulo.parentNode.insertBefore(mensaje,titulo.nextSibling);
        }
      }

      document.getElementById("icono_Recycle").onclick= function borrarTodo()
      {
        var filas = document.getElementsByClassName("fila_Lista");

        var i;

        if (filas!=null)
        { 
          var padre=filas[0].parentNode;
          
          while(filas.length>0)
          {
            padre.removeChild(padre.lastChild);
          }

          mostrarMensaje();
        }
      } 
