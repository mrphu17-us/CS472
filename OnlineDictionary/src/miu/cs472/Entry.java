package miu.cs472;

public class Entry {
	private String word;
	private String wordtype;
	private String definition;

	public Entry(String word, String wordtype, String definition) {
		super();
		this.word = word;
		this.wordtype = wordtype;
		this.definition = definition;
	}

	public String getWord() {
		return word;
	}

	public void setWord(String word) {
		this.word = word;
	}

	public String getWordtype() {
		return wordtype;
	}

	public void setWordtype(String wordtype) {
		this.wordtype = wordtype;
	}

	public String getDefinition() {
		return definition;
	}

	public void setDefinition(String definition) {
		this.definition = definition;
	}
}
