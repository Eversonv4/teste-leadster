import { MediaContainer } from "./styles";

export function MediasSection() {
  return (
    <MediaContainer>
      <div>
        <button>Agências</button>
        <button>Chatbot</button>
        <button>Marketing Digital</button>
        <button>Geração de Leads</button>
        <button>Mídia Paga</button>
      </div>
      <div>
        <h3>Ordenar por</h3>
        <select name="order-by" id="order-by">
          <option value="date">Data de Publicação</option>
          <option value="abc">Ordem Alfabética</option>
        </select>
      </div>
    </MediaContainer>
  );
}
